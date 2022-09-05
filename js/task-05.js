const elts = {
  inputEl: document.querySelector("#name-input"),
  nameInputEl: document.querySelector("#name-output"),
};

elts.inputEl.addEventListener("input", addValueInput);
elts.inputEl.addEventListener("blur", checkInput);

function addValueInput() {
  elts.nameInputEl.textContent = elts.inputEl.value;
}

function checkInput() {
  if (elts.inputEl.value.length > 0) {
    elts.nameInputEl.textContent = elts.inputEl.value;
  } else elts.nameInputEl.textContent = "Anonymous";
}

// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".
