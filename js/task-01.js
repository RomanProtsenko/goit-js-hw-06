const categoriesElement = document.querySelector('#categories');
const categoryItems = categoriesElement.querySelectorAll('li.item');
console.log('Number of categories', categoryItems.length);
categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const subcategoryItems = categoryItem.querySelectorAll('li');
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subcategoryItems.length}`);
});
