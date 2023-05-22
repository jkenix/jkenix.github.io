// Функция вызова всплывающего окна
// после нажатия на "Заказать" в карточке услуги
export default function Show_Order_Form() {
  // Выбор тега body (тела всего документа "index.html")
  let body = document.querySelector("body");
  // Выбор обертки карточки услуги, класса l-of-wrapper
  let fof = document.querySelector(".l-of-wrapper");
  // Выбор гамбургер-меню из Header.
  // Его нужно скрывать, чтобы избежать
  // случайного появления при перевороте экрана
  let ham = document.querySelector(".hamburger");
  // Добавление и удаление классов при нажатии кнопки
  body.classList.toggle("overflow-is-hidden");
  fof.classList.toggle("of-is-visible");
  ham.classList.toggle("ham-is-hide");
}
