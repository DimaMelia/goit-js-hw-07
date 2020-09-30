const inputNameRef = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

inputNameRef.addEventListener("input", (event) =>
  event.currentTarget.value === ""
    ? (nameOutput.textContent = "незнакомец")
    : (nameOutput.textContent = event.currentTarget.value)
);
