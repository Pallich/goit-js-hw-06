const valueEl = document.querySelector("#value");
const buttonDownEl = document.querySelector("[data-action=decrement]");
const buttonUpEl = document.querySelector("[data-action=increment]");

let counterValue = 0;
buttonDownEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

buttonUpEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
