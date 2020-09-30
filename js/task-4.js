const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector("[data-action=decrement]");
const incrementButton = document.querySelector("[data-action=increment]");

const decrement = () =>
  (counterValue.textContent = Number(counterValue.textContent) - 1);
const increment = () =>
  (counterValue.textContent = Number(counterValue.textContent) + 1);

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
