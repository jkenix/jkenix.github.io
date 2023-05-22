import React from "react"; // Подключение модулей React
import { NavLink, Link } from "react-router-dom"; // Подключение модулей React
// Импорт изображений
import logo from "../../img/feni-logo.svg";
// Вызов функции активации меню
function NavActive() {
  let ham = document.querySelector(".hamburger"); // Выбор класса hamburger
  let body = document.querySelector("body"); // Выбор тега body (тела всего документа "index.html")
  let header = document.querySelector(".l-header"); // Выбор класса l-header
  let headermenu = document.querySelector(".header-menu"); // Выбор класса header-menu
  // Добавление и удаление классов при нажатии гамбургера
  ham.classList.toggle("ham-is-active");
  body.classList.toggle("overflow-is-hidden");
  header.classList.toggle("head-is-switch");
  headermenu.classList.toggle("nav-is-active");
  // Если выбран элемент меню, то меню закрывается
  headermenu.addEventListener("click", function () {
    var currentTarget = event.target;
    // Если нажат тег A (элемент меню) - закрыть меню
    if (currentTarget.tagName === "A") {
      // Активируется класс вызова функции,
      // переключающий имена классов в
      // начальное значение
      NavActive();
    }
  });
}
// Компонент верхней части страницы
export default function Header() {
  return (
    <>
      <header className="l-header">
        <div className="l-header-wr">
          <Link className="logo" to="/">
            <img
              src={logo}
              alt="Feni logo"
              width="65"
              height="65"
              loading="eager"
            />
          </Link>
          <nav className="header-menu">
            <NavLink className="nav-item" to="/portfolio/all_works/">
              Портфолио
            </NavLink>
            <NavLink className="nav-item" to="/services/">
              Наши услуги
            </NavLink>
            <NavLink className="nav-item" to="/about/">
              Мы
            </NavLink>
            <NavLink className="nav-item" to="/contacts/">
              Контакты
            </NavLink>
          </nav>
          <div className="disc-head">
            <a
              href="tel:+7-963-728-66-90"
              className="feni-tel"
              title="Позвонить">
              +7-963-728-66-90
            </a>
            <a href="#discuss" className="btn-head btn-link btn-b41 ">
              Обсудить проект
            </a>
          </div>
          <div
            className="hamburger"
            onClick={() => {
              NavActive();
            }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}
