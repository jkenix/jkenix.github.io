import React, { useEffect, useState } from "react";

export default function Hamburger() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    // event.currentTarget.classList.toggle("ham-active");
    setIsActive((current) => !current);
  };
  return (
    <div
      className={`hamburger ${isActive ? "ham-active" : ""}`}
      onClick={handleClick}>
      <span className="hamburger-item"></span>
    </div>
  );
}
