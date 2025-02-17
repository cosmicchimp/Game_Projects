export function popups() {
  const popupModule = document.createElement("div");
  const popupText = document.createElement("h2");
  const closeButton = document.createElement("button");
  closeButton.classList = "closeButton";
  popupModule.classList.add("popupModule");
  closeButton.innerText = "Continue";
  popupModule.appendChild(popupText);
  popupModule.appendChild(closeButton);
  function p1ShipPlace() {
    document.body.appendChild(popupModule);
    popupModule.style.position = "absolute";
    popupText.innerText = "Player 1 place your ships";
    closeButton.addEventListener("click", () => {
      popupModule.style.display = "none";
    });
  }
  return { p1ShipPlace };
}
