function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector(".change-color");
const backgroundColor = document.querySelector("body");
const backgroundColorName = document.querySelector(".color");

changeButton.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  backgroundColor.style.backgroundColor = randomColor;
  backgroundColorName.textContent = randomColor;
});
