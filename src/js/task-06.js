const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputValid);

function onInputValid(event) {
    const input = event.currentTarget;
    if (input.value.length == input.dataset.length) {
        input.classList.add('valid')
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
    }
};