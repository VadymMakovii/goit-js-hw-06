const elementsCounter = document.querySelector('#counter');
const allBtn = elementsCounter.querySelectorAll('button');

allBtn.forEach(btn => {
    if (btn.dataset.action === 'decrement') {
        btn.classList.add('js-decrement')
    }
    else if (btn.dataset.action === 'increment') {
        btn.classList.add('js-increment')
    }
});

const decrementBtn = elementsCounter.querySelector('.js-decrement');
const incrementBtn = elementsCounter.querySelector('.js-increment');
const valueEl = elementsCounter.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

