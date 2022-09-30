const inputEl = document.querySelector('#font-size-control');
const textFieldEl = document.querySelector('#text');

inputEl.addEventListener('input', (event) => textFieldEl.style.fontSize = `${event.currentTarget.value}px`);