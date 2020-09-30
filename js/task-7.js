const rangeInputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = `${rangeInputRef.value}px`;
rangeInputRef.addEventListener(
  "input",
  (event) => (textRef.style.fontSize = `${event.currentTarget.value}px`)
);
