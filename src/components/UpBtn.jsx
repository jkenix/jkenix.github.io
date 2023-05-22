import React from "react"; // Подключение модулей React
// Компонент кнопки прокрутки страницы вверх
export default function UpBtn(props) {
  return (
    <>
      <div
        className="l-up-btn btn-focus"
        style={{ height: `${props.height}`, marginTop: `${props.mtop}` }}>
        <button
          className="up-btn btn-link btn-b41"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}>
          Вверх
        </button>
      </div>
    </>
  );
}
