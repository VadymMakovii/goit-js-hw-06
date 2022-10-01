
const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const createBtn = controlsEl.querySelector('[data-create]');
const destroyBtn = controlsEl.querySelector('[data-destroy]');
const containerEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(number) {
  const elements = [];
  let size = 20;
  for (let i = 0; i < number; i += 1) {
    size += 10;
  const divEl = document.createElement('div');
  divEl.style.backgroundColor = getRandomHexColor();
  divEl.style.width = `${size}px`;
  divEl.style.height = `${size}px`;
  elements.push(divEl);
}
  containerEl.append(...elements);
};


function destroyBoxes() {
  containerEl.innerHTML = '';
  inputEl.value = '';
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
