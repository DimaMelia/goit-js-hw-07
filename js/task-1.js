const categoryItemsRef = document.querySelectorAll(".item");
console.log(`В списке ${categoryItemsRef.length} категории.`);

categoryItemsRef.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent} 
Количество элементов: ${item.lastElementChild.children.length}`);
});
