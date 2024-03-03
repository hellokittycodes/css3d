var isMouseDown = false;
var startX, startY;
var startRotX = 0;
var startRotY = 0;

var cube = document.getElementById("cube"); // Use ID "cube"

function handleMouseDown(e) {
    isMouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    startRotX = parseInt(getComputedStyle(cube).getPropertyValue('--rotateX')) || 0;
    startRotY = parseInt(getComputedStyle(cube).getPropertyValue('--rotateY')) || 0;
}

function handleMouseUp() {
    isMouseDown = false;
}

function handleMouseMove(e) {
    if (!isMouseDown) return;

    var deltaX = e.clientX - startX;
    var deltaY = e.clientY - startY;

    var newRotX = startRotX + deltaY;
    var newRotY = startRotY - deltaX;

    cube.style.setProperty('--rotateX', newRotX + 'deg');
    cube.style.setProperty('--rotateY', newRotY + 'deg');
}

cube.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("mousemove", handleMouseMove);
