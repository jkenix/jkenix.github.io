import React from "react";

export default function Product(props) {
  return (
    <div>
      {/* Добавить alt,  */}
      <img src={props.src} width="400" height="250" alt="" /> 
      <span>{props.desc}</span>
    </div>
  );
}
