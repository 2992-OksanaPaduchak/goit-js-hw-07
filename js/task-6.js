const userNameElem = document.querySelector('#controls');
const inputElem = document.querySelector('input');
const boxesElem = document.querySelector('#boxes');
const btmElemCreate = document.querySelector("[data-create]");
const btmElemDestroy = document.querySelector("[data-destroy]");

function onClickCreate() {
    const inputValue = parseInt(inputElem.value);
    if (inputValue >= 1 && inputValue <= 100) {
        inputElem.value = '';
        createBoxes(inputValue)
    };  
};
btmElemCreate.addEventListener('click',onClickCreate);

function createBoxes(amount) {
    let boxSize = 30;
    const arr = [];
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        div.style.backgroundColor = getRandomHexColor();
        boxSize += 10;
        arr.push(div);
    };

        boxesElem.prepend(...arr);
        
    };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function destroyBoxes() {
    boxesElem.innerHTML = '';
    inputElem.value = '';
};
 
btmElemDestroy.addEventListener('click', destroyBoxes);
inputElem.classList.add('js_input_elem');
btmElemCreate.classList.add('js_btm_create');
btmElemDestroy.classList.add('js_btm_destroy');
boxesElem.classList.add('js_box');
userNameElem.classList.add('js_container');

