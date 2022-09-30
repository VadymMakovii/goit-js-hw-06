const listEl = document.querySelector('#categories');
const itemsEl = listEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}`);

const showTitleAndQuantity = itemsEl.forEach( (element) => {
    console.log(`Category: ${element.querySelector('h2').textContent}`)
    console.log(`Elements: ${element.querySelectorAll('li').length}`)
});  



