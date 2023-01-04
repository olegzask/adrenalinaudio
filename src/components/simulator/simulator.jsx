import React, { useState } from "react";
import { SimulatorTint } from "./simulator-tint";
import { SimulatorPpf } from "./simulator-ppf";

import "./simulator.styles.css";

export const Simulator = () => {
  const [selected, setSelected] = useState("window tint");

  const clicked = (event) => {
    Array.from(document.getElementsByClassName("simulator-header")).map((el) =>
      el.classList.remove("header-clicked")
    );
    const el = event.target.closest(".simulator-header");
    setSelected(
      event.target.closest(".simulator-header").innerHTML.toLowerCase()
    );
    el.classList.add("header-clicked");
  };

  const decider = () => {
    if (selected === "window tint") {
      return <SimulatorTint />;
    }
    if (selected === "protection film") return <SimulatorPpf />;
  };

  return (
    <div id="simulator-main" className="simulator-box">
      <div className="simulator-selector">
        <span
          onClick={clicked}
          className="simulator-tint-header header-clicked simulator-header"
        >
          WINDOW TINT
        </span>
        <span
          onClick={clicked}
          className="simulator-ppf-header simulator-header"
        >
          PROTECTION FILM
        </span>
      </div>

      <div className="decider">{decider()}</div>
    </div>
  );
};
