var isMouseDown = false;

function rotateCube(e) {
    if (!isMouseDown) return;

    var cube = document.getElementById("cube");
    var currentRotation = cube.style.transform || "rotateY(0deg) rotateX(0deg)";

    var match = currentRotation.match(/rotateY\(([^)]+)\) rotateX\(([^)]+)\)/);
    var currentX = match ? parseFloat(match[2]) : 0;
    var currentY = match ? parseFloat(match[1]) : 0;

    var newX = currentX + e.movementY * 0.1; // Adjust sensitivity as needed
    var newY = currentY + e.movementX * 0.1; // Adjust sensitivity as needed

    cube.style.transform = "rotateY(" + newY + "deg) rotateX(" + newX + "deg)";
}

document.addEventListener("mousedown", function () {
    isMouseDown = true;
});

document.addEventListener("mouseup", function () {
    isMouseDown = false;
});

document.addEventListener("mousemove", rotateCube);
