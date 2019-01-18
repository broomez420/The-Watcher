const G = 0.5;

function Birb(x, y) {
    this.x = x;
    this.y = y;
    
    this.velY = 0;
    this.accY = 0;
    
    this.addForce = (upForce) => {
        this.accY += upForce;
    };
    this.update = () => {
        this.addForce(G);
        
        this.velY += constrain(this.accY, -10, 10);
        this.y += this.velY;
        
        this.accY *= 0;
    };
    this.edges = () => {
        if (this.y > height) {
            this.y = height;
            this.velY = 0;
        }
        else if (this.y < 0) {
            this.y = 0;
            this.velY = 0;
        }
    };
    this.draw = () => {
        push();
        ellipseMode(CENTER);
        ellipse(this.x, this.y, 25, 25);
    };
}
Birb.prototype.addForce = (upForce) => {
    
};
function Pipe(x, openY, openL) {
    this.x = x;
    this.openY = openY;
    this.openL = openL;

    this.offX = () => {
        if (this.x + 50 <= 0)
            return true;
        else
            return false;
    };
    this.draw = () => {
        fill(255);
        noStroke();
        
        push();
        translate(this.x, 0);
        rect(0, 0, 50, this.openY);
        pop();
        
        push();
        translate(this.x, this.openY + this.openL);
        rect(0, 0, 50, height - (this.openY + this.openL));
        pop();
    };
}

let pipes = [];
let birb;
function addPipe(openY, openL) {
    pipes.push(new Pipe(width, openY, openL));    
}
function setup() {
    createCanvas(600, 600);
    addPipe(random(0, height - 100), 100);
    birb = new Birb(75, width / 2);
}
function draw() {
    background(0);

    birb.update();
    birb.edges();
    birb.draw();
    
    for (let i = 0; i < pipes.length; i++) {
        let p = pipes[i];
        p.x -= 2;
        p.draw();
        if (p.offX()) {
            pipes.shift();
            i--;
        }
    }
    
    let last = pipes[pipes.length - 1];
    if (width - last.x >= 350) {
        addPipe(random(0, height - 100), 100);
        console.log(pipes.length);
    } 
}
function keyPressed() {
    if (key === ' ') {
        birb.addForce(-7);
        // TODO: add key functionality
    }
}
