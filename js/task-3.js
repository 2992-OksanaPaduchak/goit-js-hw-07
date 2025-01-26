const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');

function onInputChange(evt) {
    const markup = evt.target.value.trim();
    if (markup) {
        spanElem.textContent = markup;
    } else {
        spanElem.textContent = 'Anonymous';
    };
};

inputElem.addEventListener('input', onInputChange);
inputElem.classList.add('js_input');
