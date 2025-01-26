const div = document.querySelector('.widget');
const colorSpan = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onColorRandom() {
    document.body.style.backgroundColor = getRandomHexColor();
    colorSpan.textContent = getRandomHexColor();
}

div.addEventListener('click', onColorRandom);
