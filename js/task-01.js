const listEl = document.querySelector('#categories');
const itemsEl = listEl.querySelectorAll('.item');

console.log(`Number of categories: ${listEl.children.length}`);

itemsEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});