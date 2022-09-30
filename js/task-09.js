const refs = {
bodyEl: document.querySelector('body'),
colorNameEl: document.querySelector('.color'),
changeColorBtn: document.querySelector('.change-color'),
};

refs.changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  refs.colorNameEl.textContent = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
