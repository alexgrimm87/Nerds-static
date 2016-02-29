var feedback = document.querySelector(".feedback"); //відстежити класс .feedback
var popup = document.querySelector(".feedback-popup");
var close = document.querySelector(".cancel");
var login = popup.querySelector("[name=login]"); //пошук в середині feedback-popup

feedback.addEventListener("click", function(event) { //при click подія почнеться
  event.preventDefault();  //відміняєм поведінку по Default, виповняється тільки одна наша функція
  popup.classList.add("feedback-popup-show"); //крапка не ставиться в классі
  login.focus(); //поставити фокус на поле ім'я
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-popup-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("feedback-popup-show")) {
      popup.classList.remove("feedback-popup-show");
    }
  }
});