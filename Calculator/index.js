let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    let value = event.target.textContent;
    screen.value += value;
  });
});

equal.addEventListener("click", function () {
  if (screen.value !== "") {
    let answer = new Function("return " + screen.value)();
    screen.value = answer;
  }
});

clear.addEventListener("click", function () {
  screen.value = "";
});
