var nose_x=0;
var nose_y=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/J4tgxvdr/clown-nose-image.jpg');
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(450,150);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-20;
        nose_y=results[0].pose.nose.y-10;
        console.log("nose x="+nose_x);
        console.log("nose y="+nose_y);
    }
}
function modelLoaded(){
    console.log("poseNet Loaded");
}
function draw(){
    image(video,0,0,600,500);
    image(clown_nose,nose_x,nose_y,30,30);
}