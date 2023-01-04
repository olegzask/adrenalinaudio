export const powerOn = (event) => {
  const powerButton = document.getElementById("power");
  const powerWall = document.getElementById("power-wall");
  if (event.target.closest(".power-wall-container").id === "power-wall") {
    powerButton.classList.add("powered");
    powerWall.classList.add("fade-in-and-out");
    setTimeout(() => (powerWall.style.display = "none"), 1900);
  }
};
export const buttonGlow = (e) => {
  const powerButton = document.getElementById("power");
  const powerHeader = document.getElementById("power-header");

  if (!powerButton.classList.contains("element")) {
    powerButton.classList.add("element");
    powerHeader.classList.add("element");
    return;
  }
  if (powerButton.classList.contains("element")) {
    powerButton.classList.remove("element");
    powerHeader.classList.remove("element");
    return;
  }
};
