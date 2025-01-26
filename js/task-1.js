const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach((category) => {
    const categoryTitle = category.querySelector('h2')
    const categoryElement = category.querySelectorAll('li')

    categoryTitle.classList.add('title')
    
    for (const li of categoryElement) {
        li.classList.add('list');
    }
       
    console.log(`Category: ${categoryTitle.textContent}`);

    console.log(`Elements: ${categoryElement.length}`);
});

