// Tailwindcss cdn
tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        primaryColor: "#ABEF5F",
        secondaryColor: "#abef5f80",
        primaryTextColor: "#212121",
        secondaryTextColor: "#737373",
        bgColorOne: "#F9F9F9",
        bgColorTwo: "#F3F3F3",
      },
      backgroundPosition: {
        customBgPosition: "25px 50px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
};

// "use strict";

let valueDisplay = document.querySelectorAll(".num_a");
let interval = 2000;

let turn = true;

window.addEventListener("scroll", () => {
  if (turn) {
    valueDisplay.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
    turn = false;
  }
});
