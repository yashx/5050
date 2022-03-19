const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  window.addEventListener("scroll", update);
});

function update() {
  const limit = window.innerHeight * 0.95;
  const upper = window.innerHeight * 0.05;
  panels.forEach((panel) => {
    if (
      panel.getBoundingClientRect().top < limit &&
      panel.getBoundingClientRect().y > upper
    ) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });
}

update();
