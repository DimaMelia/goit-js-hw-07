const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsItems = ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  return itemRef;
});

const ingredientsItemsRef = document.querySelector("#ingredients");
ingredientsItemsRef.append(...ingredientsItems);
