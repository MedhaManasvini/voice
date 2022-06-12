x = 0;
y = 0;
rectangleDraw = "";
squareDraw = "";
circleDraw = "";

var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function start() {
    document.getElementById("status").innerHTML = "The system is listening please speak";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;

    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        circleDraw = "set";
    }
    if (content == "square") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing square";
        squareDraw = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        rectangleDraw = "set";
    }
}

function setup() {
    canvas = createCanvas(600, 900)
}

function draw() {
    if (circleDraw == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHtml = "Circle is drawn";
        circleDraw = "";
    }
    if (squareDraw == "set") {
        rect(x, y, 80, 80);
        document.getElementById("status").innerHtml = "Square is drawn";
        squareDraw = "";
    }
    if (rectangleDraw == "set") {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        rectangleDraw = "";
    }
}
