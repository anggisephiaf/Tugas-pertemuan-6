let judul;
let nama;
let tombol;
let hello;
let objek;
let jalan = false;
let gravForce;
let windForce;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  tombol = createButton('Play/Pause')
  tombol.position(30,110)
  
  objekPos = createVector(width/15,height/2.5);
  objekVel = createVector(0,0);
  objekAcc = createVector(0,0);
  objekMass = 10;
  objek = new Mover(objekPos, objekVel, objekAcc, objekMass);
  
  gravForce = createVector(0, objek.mass*0.1);
  windForce = createVector(0.5, 0);
}


function draw() {
  background(176, 224, 230);
  nama = createElement('h2', 'Anggi Sephia Febriyani, 122160018')
  nama.position(30, 50)
  judul = createElement('h2', 'Simulasi Hk Newton')
  judul.position(30, 15)
  objek.display();
  
  var Cd = 0.0001;
  var diam1 = (2*objek.mass);
  var A1 = PI*diam1/2;
  var frictionForce = objek.velocity.copy();
  frictionForce.normalize()
  frictionForce.mult(-1* (frictionForce.mag()**2) *A1*Cd)

  
  objek.applyForce(gravForce);
  objek.applyForce(windForce);
  objek.applyForce(frictionForce);
  
  
  
  tombol.mousePressed(run);
  
  if (jalan){
    objek.update();
  }
  
}

function sayHello() {
  hello = createElement('h2', 'Selamat datang ' + nama.value())
  hello.position(30, 150)
}

function run(){
  // objek.update();
  if (jalan){
    jalan = false;
  }
  else{
    jalan = true
  }
}

class Mover {
  constructor(loc, vel, acc, m){
    this.location = loc;
    this.mass = m;
    this.velocity = vel;
    this.acceleration = acc;
  }
  update(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
  }
  display(){
    stroke(0);
    fill(43,191,254)
    ellipse(this.location.x, this.location.y+20,60,60);
    fill(248,248,255)
    ellipse(this.location.x, this.location.y+25,50,50);
    ellipse(this.location.x+8, this.location.y+5,15,20);
    ellipse(this.location.x-8, this.location.y+5,15,20);
    fill(0,0,0)
    ellipse(this.location.x+7, this.location.y+7,7,10);
    ellipse(this.location.x-7, this.location.y+7,7,10);
    fill(248,248,255)
    ellipse(this.location.x+7, this.location.y+7,3,5);
    ellipse(this.location.x-7, this.location.y+7,3,5);
    line(this.location.x, this.location.y+30, this.location.x,     this.location.y+15);
    line(this.location.x-10, this.location.y+25, this.location.x-30,     this.location.y+30);
    line(this.location.x-10, this.location.y+20, this.location.x-30,     this.location.y+20);
    line(this.location.x-10, this.location.y+17, this.location.x-30,     this.location.y+9);
     line(this.location.x+10, this.location.y+25, this.location.x+30,     this.location.y+30);
    line(this.location.x+10, this.location.y+20, this.location.x+30,     this.location.y+20);
    line(this.location.x+10, this.location.y+17, this.location.x+30,     this.location.y+9);
    fill(255,0,0)
    ellipse(this.location.x, this.location.y+13,10,10); 
    fill(250,128,144)
    ellipse(this.location.x, this.location.y+35, 10,15);
    
    
    
  }  
  
  applyForce(force){
    force.div(this.mass)
    this.acceleration.add(force);
  }
}