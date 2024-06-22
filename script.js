// navbar
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("hidden");
});

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// navbar
