import React, { useState } from "react";
import Booking from "./Booking";
import "./remotestart.styles.css";

export default function RemoteCard({ options }) {
  const [remoteModel, setModel] = useState();
  const { model, price, brandLogo, features, imgColor, range } = options;

  const showModel = (e) => {
    const parentCont = e.target.closest(".remote-card-container");
    const arr = Array.from(parentCont.children)[1];
    const newArr = Array.from(arr.children)[0];
    const remModel = Array.from(newArr.children)[0].innerHTML;
    setModel(remModel + "");
  };

  return (
    <div id={model} className="remote-card-container">
      <div className="top-logos-container">
        <img className="brand-logo" src={brandLogo} alt="brand-logo" />
      </div>

      <div className="model-range-container">
        <h2 className="remote-model">
          Model: <span className="model">{model}</span>
        </h2>
        <h2 className="remote-range">Range: {range}</h2>
      </div>

      <div className="img-feat-container">
        <img className="remote-img" src={imgColor} alt="remote-img" />
        <div className="feat-container">
          {features.map((feat, id) => (
            <h2 key={id} className="feature">
              {feat.symbol} {feat.name}
            </h2>
          ))}
        </div>
      </div>

      <div className="links-container">
        {!remoteModel ? null : (
          <Booking
            opts={{ rem: remoteModel, reset: setModel, txt: "Remote" }}
          />
        )}
        {/* <h2 className="remote-range">Price: ${price}</h2> */}
        <button onClick={showModel} className="remote-btn">
          REQUEST BOOKING
        </button>
      </div>
    </div>
  );
}
