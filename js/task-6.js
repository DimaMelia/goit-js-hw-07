const validationInputRef = document.querySelector("#validation-input");
const onInputBlur = (event) => {
  const toggleSet =
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length);

  event.currentTarget.classList.toggle("valid", toggleSet);
  event.currentTarget.classList.toggle("invalid", !toggleSet);
};

const onInputFocus = (event) =>
  event.currentTarget.classList.remove("valid", "invalid");

validationInputRef.addEventListener("focus", onInputFocus);
validationInputRef.addEventListener("blur", onInputBlur);
