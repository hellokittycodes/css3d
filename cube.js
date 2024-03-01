function rotateCube(e) {
    var cube = document.getElementById("cube"); // Change getElementsByClassName to getElementById
    var x = e.clientX - window.innerWidth / 2;
    var y = e.clientY - window.innerHeight / 2;
    var q = 0.15;

    x = x * q * 1.25;
    y = -y * q * 1.25;

    cube.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
}

document.addEventListener("mousemove", rotateCube);

 