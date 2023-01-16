import React from "react";

export default function InfoCardTop({ product }) {
  const { brand, model, infoState, setInfoState } = product;

  const changeView = (e) => {
    const allButtons = Array.from(document.getElementsByClassName("info-btn"));
    allButtons.map((btn) => btn.classList.remove("active-info"));
    const prod = e.target;
    if (prod.id === "overview") {
      setInfoState("overview");
      prod.classList.add("active-info");
    }
    if (prod.id === "specs") {
      setInfoState("specs");
      prod.classList.add("active-info");
    }
  };

  return (
    <div className="infocard-top-container">
      <div className="model-nav-container">
        <div className="model-container">
          <span className="model-name">
            {brand} {model}
          </span>
        </div>
        <div className="info-nav">
          <button
            id="overview"
            onClick={changeView}
            className="info-btn active-info"
          >
            Overview
          </button>
          <button onClick={changeView} id="specs" className="info-btn">
            Features
          </button>
        </div>
      </div>
    </div>
  );
}
