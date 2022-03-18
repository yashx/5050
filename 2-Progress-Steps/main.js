const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progressSteps = document.querySelectorAll(".progress-steps");
const progressBar = document.getElementById("progress-bar");

var activeCount = 1;

prevBtn.addEventListener("click", () => {
  if (activeCount > 1) {
    activeCount--;
    update();
  }
});

nextBtn.addEventListener("click", () => {
  if (activeCount < progressSteps.length) {
    activeCount++;
    update();
  }
});

function update() {
  if (activeCount == 1) {
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  } else if (activeCount == progressSteps.length) {
    prevBtn.disabled = false;
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  progressSteps.forEach((step, index) => {
    if (index < activeCount) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  progressBar.style.width =
    ((activeCount - 1) / (progressSteps.length - 1)) * 100 + "%";
}

update();
