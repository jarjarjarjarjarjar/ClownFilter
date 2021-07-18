noseX = 0;
noseY = 0;
function preload() {
    //clown_nose = loadImage("pngtree-clown-red-nose-animation-illustration-image_1243961.jpg")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0)
    circle(noseX, noseY, 20)
    //image(clown_nose, noseX, noseY)
}

function take_snapshot() {
    save('myFIlterImage.png');
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results)
        console.log('nose x = ' + results[0].pose.nose.x)
        console.log('nose y = ' + results[0].pose.nose.y)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
