const bg = document.querySelector(".bg");
const loader = document.querySelector(".loader");

var curr = 0;

var inter = setInterval(update, 30);

function update() {
  curr++;
  console.log(curr);
  if (curr > 99) {
    clearInterval(inter);
  }
  loader.textContent = `${curr}%`;
  loader.style.opacity = scale(curr, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(curr, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
