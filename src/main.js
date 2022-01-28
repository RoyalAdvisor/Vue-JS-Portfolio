import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

const menu_btn = document.querySelector(".menu");
const mobile_menu = document.querySelector(".mobile-nav");
menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".nav-container").style.background =
      "rgba(0, 20, 0, 85%)";
  } else {
    document.querySelector(".nav-container").style.background =
      "linear-gradient(to right, #fdfc47, #24fe41)";
  }
}

const collapse = document.querySelectorAll(".mobile");
collapse.forEach((element) => {
  element.addEventListener("click", () => {
    mobile_menu.classList.toggle("is-active");
    menu_btn.classList.remove("is-active");
  });
});
