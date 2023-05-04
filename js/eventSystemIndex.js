var nameSize = 5.0;
var rotation = 0.0;
var changeSizeby = 0.01;
var changeRotateby = 0.1;
intervalNum1 = setInterval(blowUpName, 25);

function blowUpName() {
    if (nameSize > 6 || nameSize < 4) {
        changeSizeby *= -1;
        changeRotateby *= -1;
    };
    nameSize += changeSizeby;
    rotation += changeRotateby;
    document.getElementById("CamTitle").style.fontSize = (String(nameSize) + "vw");
    document.getElementById("CamTitle").style.rotate = (String(rotation) + "deg");
}