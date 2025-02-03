"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const arrowBtn = document.querySelector(".icon-arrow");
  const email = document.querySelector(".email");
  const warning = document.querySelector(".warning");
  const iconError = document.getElementById("icon-error");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent form from reloading the page
    console.log("email submitted!");
  });
  arrowBtn.addEventListener("click", function () {
    if (email.value.trim() === "") {
      console.log("email empty");
      iconError.style.display = "inline-flex";
      warning.style.display = "flex";
      email.style.border = "2px solid hsl(0, 93%, 68%)";
    } else {
      console.log("email: ", email.value);
    }
    console.log("logged");
  });
});
