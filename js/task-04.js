const elementsCounter = document.querySelector('#counter');
const allBtn = elementsCounter.querySelectorAll('button');
const valueEl = elementsCounter.querySelector('#value');
const decrementBtn = allBtn[0];
const incrementBtn = allBtn[1];
let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});