function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const myBoxes = [];
  const inputValue = inputEl.value;
  let startSize = 30;
  boxesEl.style.display = "flex";
  for (let i = 0; i < inputValue; i++) {
    const newBox = document.createElement("div");
    newBox.textContent = "";
    newBox.style.width = startSize + "px";
    newBox.style.height = startSize + "px";
    newBox.style.display.flex;
    newBox.style.backgroundColor = getRandomHexColor();
    myBoxes.push(newBox);
    startSize += 10;
  }

  boxesEl.append(...myBoxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = 0;
}
