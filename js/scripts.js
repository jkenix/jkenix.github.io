// Vanilla scripts js
let executed = false;
window.addEventListener(
  "scroll",
  function () {
    if (!executed) {
      let body = document.querySelector("body");
      let Scroll =
        '<button class="up-btn" title="Scroll Up"><svg class="arrow-top" viewBox="0 0 5 9"><path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" /></svg></button>';
      body.insertAdjacentHTML("beforeend", Scroll);
    }
    executed = true; // code done. Stop func
  },
  true
);
// Function scroll to top
window.addEventListener(
  "scroll",
  function () {
    let scrollT = document.querySelector(".up-btn");
    scrollT.onclick = function () {
      window.scrollTo({ top: 0 });
    };
    if (window.scrollY > 1000) {
      scrollT.style = "display: flex;";
    } else if (window.scrollY < 1000) {
      scrollT.style = "display: none;";
    }
  },
  true
);
