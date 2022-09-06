const elts = {
  inputEl: document.querySelector("#name-input"),
  nameInputEl: document.querySelector("#name-output"),
};

elts.inputEl.addEventListener("input", addValueInput);
elts.inputEl.addEventListener("input", checkInput);

function addValueInput() {
  elts.nameInputEl.textContent = elts.inputEl.value;
}

function checkInput() {
  if (elts.inputEl.value.length > 0) {
    elts.nameInputEl.textContent = elts.inputEl.value;
  } else elts.nameInputEl.textContent = "Anonymous";
}
