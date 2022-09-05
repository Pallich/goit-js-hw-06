const inputEl = document.querySelector("#validation-input");
const inputLength = inputEl.querySelector("#validation-input");
inputEl.addEventListener("blur", checkInput);

function checkInput(event) {
  const inpupLength = event.path[0].dataset.length;

  if (inputEl.value.length == inpupLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
