import React from "react";
import { useLocation } from "react-router-dom";

export default function Product(props) {
  const state = () => {
    const location = useLocation();
  };

  return (
    <div>
      <img src={`./img${location.pathname}.webp`} alt="" />
      {/* <span>{da.desc}</span> */}
    </div>
  );
}
