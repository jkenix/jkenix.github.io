import React from "react";

export default function UpBtn(props) {
  return (
    <button
      className={props.btnname}
      title="Up page button"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      Вверх
    </button>
  );
}
