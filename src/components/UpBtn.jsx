import React from "react";

export default function UpBtn() {
  return (
    <button
      className="up-btn"
      title="Up page button"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      Вверх
    </button>
  );
}
