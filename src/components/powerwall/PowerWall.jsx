import React, { useState, useContext, useEffect } from "react";
import { BooleanContext } from "../../store";
import { FaPowerOff } from "react-icons/fa";
import "./powerwall.styles.css";

export const PowerWall = () => {
  const [pressed, setPressed] = useState(false);
  const { clickedOn, toggleBoolean, path } = useContext(BooleanContext);

  const powerOn = (event) => {
    const powerButton = document.getElementById("power");
    const powerWall = document.getElementById("power-wall");
    const showPage = document.getElementById("home");
    const footer = document.getElementById("footer");
    if (path === "/" && !clickedOn) {
      setPressed(true);
      showPage ? (showPage.style.display = "none") : null;
      footer.style.display = "none";
      powerButton.classList.add("powered");
      powerWall.classList.add("fade-in-and-out");
      toggleBoolean();
      setTimeout(() => {
        powerWall.style.display = "none";
        showPage ? showPage.classList.add("turned") : null;
        showPage ? (showPage.style.display = "block") : null;
        footer.style.display = "block";
      }, 1800);
      return;
    }
  };

  return (
    <div id="power-wall" className="power-wall-container">
      <div className="power-logo-container">
        <img className="adren-logo" src="logos/adrenalin_logo.png" alt="" />
        <div onClick={powerOn} id="power" className="element power-logo">
          <FaPowerOff />
        </div>

        <h3 id="power-header" className="power-logo-header blinking">
          {!pressed ? "Press to start..." : "Welcome!"}
        </h3>
      </div>
    </div>
  );
};
