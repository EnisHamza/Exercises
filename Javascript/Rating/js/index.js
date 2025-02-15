const mouth = document.querySelector("#mouth");
const emotionElement = document.querySelectorAll(".rating-container div");

function selectEmotion(e) {
  mouth.classList.remove("sad-mouth", "indifferent-mouth", "happy-mouth");
  const chosenEmotion = e.target.id;
  if (chosenEmotion == "bad") {
    mouth.classList.add("sad-mouth");
  }
  if (chosenEmotion == "okay") {
    mouth.classList.add("indifferent-mouth");
  }
  if (chosenEmotion == "good") {
    mouth.classList.add("happy-mouth");
  }
}
emotionElement.forEach((emotionElement) =>
  emotionElement.addEventListener("click", selectEmotion)
);
