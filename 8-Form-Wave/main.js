const form = document.querySelector(".form-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements);
  alert(
    `Email: ${e.target.elements.email.value}\nPass: ${e.target.elements.password.value}`
  );
});

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (char, i) => `<span style="transition-delay:${50 * i}ms">${char}</span>`
    )
    .join("");
});
