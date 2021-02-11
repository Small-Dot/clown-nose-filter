noseX = 0;
noseY = 0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/brrv4TCh/clown-nose3.png');
}

function setup(){
  canvas =  createCanvas(300, 300);
  // createCanvas(width, height) - syntax for creating canvas
  canvas.center()
  video = createCapture(VIDEO);
  video.size(300, 300);
  // createCapture(VIDEO) - syntax for triggering webcam
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);


}

function modelLoaded() {
  console.log("modelLoaded");
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x-20;
    noseY = results[0].pose.nose.y-20;
    console.log("Nose X position = " + noseX);
    console.log("Nose Y position = " + noseY);
  }
}

function draw(){
image(video, 0, 0, 300, 300);
// image(image to be shown, x value where image is starts, y value, width, height)
image(clown_nose, noseX, noseY, 40, 40)
}

function takeSnapshot(){
    save("clown-nose.png");
}

