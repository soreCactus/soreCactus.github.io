/* @pjs preload="file1.png","file2.png","file3.jgp"; */

PImage img;
int smallPoint, largePoint, x, y, count;
float rand;
char direction;


void setup() {
  size(1196, 673);
  img = loadImage("office.jpeg");
  smallPoint = 8;
  largePoint = 14;
  count = 0;
  x = width / 2;
  y = height / 2;
  imageMode(CENTER);
  noStroke();
  background(119,232,157);
  
}

void draw() { 
        if (direction == 'w') {
          y--;
        } else if (direction == 'd') {
          x++;
        } else if (direction == 's') {
          y++;
        } else if (direction == 'a') {
          x--;
        } else {
          y++;
        }
        color pix = img.get(x, y);
        fill(pix, 128);
        ellipse(x, y, largePoint, largePoint);   
        count++;
        rand = random(18,30);
        
        if (count > rand) {
          count = 0;
          rand = random(0,1);
          if (direction == 'w' || direction == 's') {
             if (rand > 0.5)
               direction = 'a';
             else
               direction = 'd';
          } else if (rand > 0.5) {
             direction = 'w'; 
          } else {
             direction = 's'; 
          }
        }
}
