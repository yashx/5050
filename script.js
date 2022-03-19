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
    text: "Hidden Search Widget",
  },
  {
    url: "./5-Blurry-Loading/index.html",
    text: "Blurry Loading",
  },
  {
    url: "./6-Scroll-Animation/index.html",
    text: "Scroll Animation",
  },
  {
    url: "./8-Form-Wave/index.html",
    text: "Form Wave",
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
