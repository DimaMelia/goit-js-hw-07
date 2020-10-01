const boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");
const inputRef = controlsRef.firstElementChild;
const renderBtn = document.querySelector("[data-action=render]");
const destroyBtn = document.querySelector("[data-action=destroy]");

const randomColor = () =>
  `rgb(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)}
    )`;

const createBox = (size) => {
  const box = document.createElement("div");
  //   box.style = `width: ${size}px; height: ${size}px; background-color: ${randomColor()}`;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = randomColor();
  return box;
};

const createBoxes = function (amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    fragment.appendChild(createBox(30 + i * 10));
  }
  return boxesRef.appendChild(fragment);
};

renderBtn.addEventListener("click", () => createBoxes(inputRef.value));

destroyBtn.addEventListener("click", () => (boxesRef.innerHTML = ""));
