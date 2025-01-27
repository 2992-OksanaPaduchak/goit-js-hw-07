const div = document.querySelector('.widget');
const colorSpan = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onColorRandom() {
  const colorRandom = getRandomHexColor();
  document.body.style.backgroundColor = colorRandom;
  colorSpan.textContent = colorRandom;
}

div.addEventListener('click', onColorRandom);
