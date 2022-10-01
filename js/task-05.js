const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    inputEl.value.length === 0 ? outputEl.textContent = 'Anonymous' : outputEl.textContent = event.currentTarget.value;
};





