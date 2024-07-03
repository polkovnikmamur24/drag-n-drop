const ball = document.getElementById('ball');
let offsetX, offsetY;

ball.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - ball.getBoundingClientRect().left;
    offsetY = e.clientY - ball.getBoundingClientRect().top;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    ball.style.left = `${e.clientX - offsetX}px`;
    ball.style.top = `${e.clientY - offsetY}px`;
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}