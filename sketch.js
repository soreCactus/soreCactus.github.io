 // Location of shape
 // Velocity of shape
// Gravity acts at the shape's acceleration

function setup() {
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  logo = createImg("JosiahRise.png");
  work = createImg("Work.png");
  about = createImg("About.png");
  //canvas2 = createGraphics(window.innerWidth,window.innerHeight);
  logo.position((100),60);
  work.position(225,450);
  about.position(525,450);
  logo.size(700,500);
  work.size(157.5,50);
  about.size(157.5,50);
  logo.style('opacity', 0);
  work.style('opacity', 0);
  about.style('opacity', 0);
  // canvas2.style('z-index',8);
  // logo.style('z-index',0);
  // lid.style('z-index',1);
  // canvas.style('z-index',-8);
  logoOpacity = 0;
  height = window.innerHeight - 50;
  xlocation = -20;
  ylocation = 0;
  size = 60;
  lastX = -20;
  lastY = 0;
  floor = window.innerHeight + 1200;
  xvelocity = 2.0;
  yvelocity = 2.1;
  ygravity = 0.2;
  revealPoint = 800;
  stopBounce = 1400; //the x at which the ball will stop bouncing
  background(121,189,143);
  intro = true;
}

function draw() {
  
  
  // Add velocity to the location.
  xlocation += xvelocity;
  ylocation += yvelocity;
  
  // Add gravity to velocity
  yvelocity += ygravity;
  
  // Bounce off edges
  //if ((location.x > width) || (location.x < 0)) {
  //  velocity.x = velocity.x * -1;
  //}
  if (xlocation > revealPoint || !intro) {
  	logoOpacity += 0.02;
  	logo.style('opacity',logoOpacity);
  	work.style('opacity',logoOpacity);
  	about.style('opacity',logoOpacity);
  }

  if (ylocation > height) {
  	if (intro) {
	  	if (ylocation < floor) {
	  	//but bounce until we get there
	    //We're reducing velocity ever so slightly 
	    //when it hits the bottom of the window
		    if (xlocation < (window.innerWidth - 300)) {
		    	yvelocity = yvelocity * -0.85; 
		    	ylocation = height;
			} 
		} else {
			intro = false;
			size = 40;
			xlocation = 280;
			ylocation = -20;
			xvelocity = 0;
			yvelocity = 2.1;	
			height = 100;
		}
	} else {
		yvelocity = 0;
	}
  }
  
  // Display circle at location vector
  if (intro) {
	  stroke(255,97,56);
	  strokeWeight(2);
	  fill(121,189,143);
	  ellipse(lastX,lastY,size,size);
	  fill(0);
	  lastY = ylocation;
	  lastX = xlocation;
 	  size++;
 	  ellipse(xlocation,ylocation,size,size);
  } 
  
}