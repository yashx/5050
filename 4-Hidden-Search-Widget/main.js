const search_icon = document.querySelector(".search-icon");
const container = document.querySelector(".container");
const input = document.querySelector(".input");

search_icon.addEventListener("click", () => {
  container.classList.toggle("active");
  input.focus();
});
