import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BooleanContext } from "../../store";
import Booking from "./Booking";
import { remotes } from "./remoteslist";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import "./remotestart.styles.css";

export default function RemoteCard({ options }) {
  const [remoteModel, setModel] = useState();
  const { model, price, brandLogo, features, imgColor, range } = options;
  const { setActiveProduct } = useContext(BooleanContext);

  const showModel = (e) => {
    const parentCont = e.target.closest(".remote-card-container");
    const arr = Array.from(parentCont.children)[1];
    const newArr = Array.from(arr.children)[0];
    const remModel = Array.from(newArr.children)[0].innerHTML;
    setModel(remModel + "");
  };

  const toggleActiveProduct = (e) => {
    const clickedProductId = e.target.closest(".remote-card-container").id;
    const properProduct = remotes.find((el) => el.model === clickedProductId);
    setActiveProduct(properProduct);
    scrollToTop();
  };

  return (
    <div id={model} className="remote-card-container">
      <div className="top-logos-container">
        <img
          className="brand-logo"
          src="/logos/adrenalin_logo.png"
          alt="adrenalin-logo"
        />
        <img className="brand-logo" src={brandLogo} alt="brand-logo" />
      </div>

      <div className="model-range-container">
        <h2 className="remote-model">
          <span className="model">{model}</span>
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
          REQUEST INFO
        </button>

        <Link to={model}>
          <button onClick={toggleActiveProduct} className="remote-btn">
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
