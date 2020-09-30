const categoryItemRef = document.querySelectorAll(".item");
console.log(`В списке ${categoryItemRef.length} категории.`);

categoryItemRef.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent} 
    Количество элементов: ${
      document.querySelector(".item ul").children.length
    }`);
});
