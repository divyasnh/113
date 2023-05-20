
function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    fill("red")
    stroke("red")
    rect(0, 0, 650, 490);
    tint_color = "";
}

function draw() {
    image(video, 20, 20, 600, 450);
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}