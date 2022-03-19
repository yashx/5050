const items = [
  {
    url: "./1-Expanding-Card/index.html",
    text: "Expanding Card",
  },
  {
    url: "./2-Progress-Steps/index.html",
    text: "Progress Steps",
  },
  {
    url: "./3-Rotating-Nav/index.html",
    text: "Rotating Nav",
  },
  {
    url: "./4-Hidden-Search-Widget/index.html",
    text: "	Hidden Search Widget",
  },
];

const container = document.getElementById("container");

items.forEach((item) => {
  const a = document.createElement("a");
  a.href = item.url;
  a.textContent = item.text;
  a.classList.add("item");
  container.appendChild(a);
});