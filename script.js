let r;
let angle;
let step;

function setup() {
    createCanvas(700,700);
    background(39,170,225);

    noStroke();
    circle(width/2, height/2.5, 200);
    filter(BLUR, 60);

    r = 200;
    angle = 0;
    step = TWO_PI/12;
  };
  
function draw() {
    
    translate(width / 2, height / 2.5);
    
    // translate(width/2, height/2.5);

    let x = r * sin(angle);
    let y = r * cos(angle);
    
    circle(x, y, 60);

    angle = angle + step;
};

//Code to place objects in a circle written by ftobon@heartofla.org
