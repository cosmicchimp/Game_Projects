export function clearFirstPage() {
  const startButton = document.querySelector(".startButton");
  const userInput = document.querySelector(".userInput");
  const gameBox = document.querySelector(".gameInputs");
  const title = document.querySelector(".title");
  title.innerText = "Place Ships";
  startButton.style.display = "none";
  userInput.style.display = "none";
  gameBox.style.display = "none";
}
