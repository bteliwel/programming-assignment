var sunX = 600;
var sunY = 500;

var sunDiameter = 150;

function setup() {
    createCanvas(900,800);

}

function draw() {
    background('lightblue');

    ellipse(sunX, sunY, sunDiameter)
    
    sunY -= 2;
    
    if (sunY < 100) {
        sunY = 100;
        
        // Background
        fill('black');
        rect(0, 0, width, height);
        
        // Moon
        fill('yellow')
        ellipse(sunX, sunY, sunDiameter);

    }

}

function mousePressed() {
    sunDiameter -= 10;
}