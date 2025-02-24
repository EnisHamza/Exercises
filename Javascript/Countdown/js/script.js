const timeLeftText = document.querySelector("#time-left");
const sliderFill = document.querySelector(".fill");
const startCount = 5;
let timeLeft = startCount;

const timerId = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timeLeftText.innerText = timeLeft;
    sliderFill.style.width = (timeLeft / startCount) * 100 + "%";
  } else {
    clearInterval(timerId);
    timeLeftText.innerHTML = "FIN!";
    surprise();
  }
}, 1000);

function surprise() {
  const colors = [
    "rgba(255,105,97,0.5)",
    "rgba(97,168,255,0.5)",
    "rgba(247,255,97,0.5)",
    "rgba(97,255,184,0.5)",
    "rgba(255,255,255,0.5)",
  ];

  for (let i = 0; i <= 500; i++) {
    setTimeout(() => {
      const circleElement = document.createElement("div");
      circleElement.classList.add("circle");
      circleElement.style.left = Math.floor(Math.random() * 100) + "%";
      circleElement.style.top = Math.floor(Math.random() * 100) + "%";
      circleElement.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      timeLeftText.append(circleElement);
    }, i * 5);
  }
}
