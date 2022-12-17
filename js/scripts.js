// Vanilla scripts js
let executed = false;
window.addEventListener(
  "scroll",
  function () {
    if (!executed) {
      let body = document.querySelector("body");
      let Scroll =
        '<a href="#top" id="scroll_top" title="Scroll Up"><svg class="arrow-top" viewBox="0 0 5 9"><path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" /></svg></a>';
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
    let scrollT = document.getElementById("scroll_top");
    if (window.scrollY > 1000) {
      scrollT.style = "display: flex;";
      // Delete # after scroll to top
      history.pushState("", document.title, window.location.pathname);
    } else if (window.scrollY < 1000) {
      scrollT.style = "display: none;";
    }
  },
  true
);