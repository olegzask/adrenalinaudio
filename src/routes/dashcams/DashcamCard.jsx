import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Booking from "../remotestart/Booking";
import { BooleanContext } from "../../store";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import { dashcams } from "./dashcamlist";

export default function DashcamCard({ options }) {
  const [remoteModel, setModel] = useState();
  const { setActiveProduct } = useContext(BooleanContext);

  const {
    model,
    type,
    brand,
    moreInfo,
    description,
    images,
    brandLogo,
    features,
    imgColor,
    range,
  } = options;

  const showModel = (e) => {
    const parentCont = e.target.closest(".remote-card-container");
    const arr = Array.from(parentCont.children)[1];
    const newArr = Array.from(arr.children)[0];
    const remModel = Array.from(newArr.children)[0].innerHTML;
    setModel(remModel + "");
  };

  const toggleActiveProduct = (e) => {
    const clickedProductId = e.target.closest(".remote-card-container").id;
    const properProduct = dashcams.find((el) => el.model === clickedProductId);
    setActiveProduct(properProduct);
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
          Model: <span className="model">{model}</span>
        </h2>
        <h2 className="remote-range">{range}</h2>
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
            opts={{ rem: remoteModel, reset: setModel, txt: "DashCam" }}
          />
        )}
        {/* <h2 className="remote-range">Price: ${price}</h2> */}

        <button onClick={showModel} className="remote-btn">
          REQUEST INFO
        </button>

        <Link onClick={scrollToTop} to={model}>
          <button onClick={toggleActiveProduct} className="remote-btn">
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
