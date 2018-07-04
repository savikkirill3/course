function wichMouseButtonPressed() {
    document.addEventListener("click", function () {
        alert('left mouse button')
    });
    document.addEventListener("contextmenu", function () {
        alert('right mouse button')
    });
    document.addEventListener("wheel", function () {
        alert('middle mouse button')
    });
}
wichMouseButtonPressed();