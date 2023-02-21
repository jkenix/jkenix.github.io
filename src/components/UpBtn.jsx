import React from "react";

export default function UpBtn(props) {
  return (
    <button
      className="up-btn"
      title="Up page button"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}>
      <svg className="arrow-top" viewBox="0 0 5 9">
        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
      </svg>
    </button>
  );
}
