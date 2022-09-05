const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", checkInput);

function checkInput() {
  const inpupLength = inputEl.dataset.length;

  if (inputEl.value.length == inpupLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
