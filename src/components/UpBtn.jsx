import React from "react";

export default function UpBtn(props) {
  return (
    <>
      <div className="l-up-btn btn-focus" style={{height: `${props.height}`, marginTop: `${props.mtop}`}}>
        <button
          className="up-btn btn-link btn-b55"
          title="Вверх"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}>
          Вверх
        </button>
      </div>
    </>
  );
}
