const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", changeFontSize);

function changeFontSize() {
  textEl.style.fontSize = inputRangeEl.value + "px";
}
