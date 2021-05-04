const flock = [];
let alignSlider, cohesionSlider, separationSlider;
let roboto;
var hiArray;
var hiArray2;
var fidelity = 0.05;
var fidelity2 = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  for (let i = 0; i < 100; i++){
  flock.push(new Boid());
  }
roboto = loadFont('assets/RobotoMono-Bold.ttf');
textFont(roboto);
textAlign(CENTER);
}

function draw() {
  background(0);

  push();
  let timeH = hour();
  let timeM = minute();
  let dateM = month();
  let dateD = day();
  let dateY = year();


   hiArray = roboto.textToPoints(timeH + ':' + timeM,100,height/2+100,400, {

    sampleFactor: fidelity

  });

  for (let i = 0; i < hiArray.length; i++){

    var r = sin(radians(frameCount)*10)*10+(mouseY*0.1);
    //noStroke();
    strokeWeight(5);
    noFill();
    ellipse(hiArray[i].x, hiArray[i].y,r,r);
  }

  hiArray2 = roboto.textToPoints(dateD + '/' + dateM + '/' + dateY,width/2-250,height-100,100, {

    sampleFactor: fidelity2

  });

  for (let i = 0; i < hiArray2.length; i++){

    var r = sin(radians(frameCount)*5)*10;
    //noStroke();
    strokeWeight(5);
    noFill();
    ellipse(hiArray2[i].x, hiArray2[i].y,r,r);
  }

  pop();

  for (let boid of flock){
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}