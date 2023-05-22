import React from "react"; // Подключение модулей React
import Form from "../Form.jsx"; // Импорт компонента формы
import Show_Order_Form from "../../js/scripts.js"; // Импорт компонента показывания формы заказа
// Компонент всплывающего окна формы заказа
export default function Order_Form(props) {
  return (
    <>
      <div className="l-of-content l-feni-section l-fm">
        <button
          className="fof-close"
          onClick={() => {
            Show_Order_Form();
          }}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L20 20" stroke="#fff" />
            <path d="M20 1L0.999999 20" stroke="#fff" />
          </svg>
        </button>
        <Form
          class="l-order-form l-feni-form"
          initial={{ y: -100, opacity: 0 }}
          form_link_service="https://formspree.io/f/moqzyjjq"
          title={props.form_title}
          value={props.form_service_name}
          textarea_rows={props.textarea_rows_value}
        />
      </div>
    </>
  );
}
