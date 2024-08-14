const rgbElement = document.getElementById('js-rgb-light');
let colors = ['red', 'green', 'blue'];
let currentIndex = 0;

function changeColor() {
    rgbElement.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);
