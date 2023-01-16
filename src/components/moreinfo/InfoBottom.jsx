import React from "react";
import AppStore from "./AppStore";

export default function InfoBottom({ product }) {
  const { app } = product;
  const stepBack = () => {
    history.back();
  };

  return (
    <div className="infocard-bottom-container">
      {app ? <AppStore info={product} /> : null}
      <div className="action-buttons-container">
        <button onClick={stepBack} className="infobtn">
          BACK TO PRODUCTS
        </button>
      </div>
    </div>
  );
}
