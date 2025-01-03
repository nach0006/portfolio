// Highlight active menu item
const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Burger menu functionality
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
