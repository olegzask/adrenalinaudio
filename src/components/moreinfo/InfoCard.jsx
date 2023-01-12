import React, { useContext } from "react";
import { BooleanContext } from "../../store";
import Booking from "../../routes/remotestart/Booking";
import { FaClipboardList } from "react-icons/fa";
import "./infocard.styles.css";

export default function InfoCard() {
  const { activeProduct } = useContext(BooleanContext);

  const {
    model,
    type,
    brand,
    imgColor,
    images,
    features,
    range,
    moreInfo,
    description,
    category,
  } = activeProduct;

  const changeImg = (e) => {
    const imgSource = e.target.src;
    const mainImg = document.getElementById("main-pic");
    mainImg.src = imgSource;
  };

  const stepBack = () => {
    history.back();
  };

  return (
    <div className="infocard-container">
      <div className="model-nav-container">
        <div className="model-container">
          <span className="model-name">
            {brand} {model}
          </span>
        </div>
        <div className="info-nav">
          <button className="info-btn">Overview</button>
          <button className="info-btn">Specs</button>
          {/* <button className="info-btn">App</button> */}
        </div>
      </div>

      <div className="pics-container">
        <img
          id="main-pic"
          className="main-product-img"
          src={imgColor}
          alt="product image"
        />

        <div className="allpics-container">
          {images.map((path, id) => (
            <img
              onClick={changeImg}
              src={path}
              key={id}
              className="product-img"
            />
          ))}
        </div>
      </div>

      <div className="about-product-container">
        <h2 className="quick-description">Description</h2>
        <ul className="prod-list">
          {description.map((el, id) => (
            <li key={id} className="description-point">
              {el}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-features-container">
        <div className="feat-left-side">
          <h2>Features</h2>
          <FaClipboardList className="clipboard" />
        </div>
        <div className="feats-container">
          {features.map((feat, id) => (
            <h2 key={id} className="feature prd-feature">
              {feat.symbol} {feat.name}
            </h2>
          ))}
        </div>
      </div>

      <div className="apple-google-stores-container">
        <span className="app-header">Download the App</span>
        <div className="appstore">
          <img
            className="store-img"
            src="/logos/app-store.svg"
            alt="apple-store-button"
          />
          <img
            className="store-img"
            src="/logos/google-play.svg"
            alt="apple-store-button"
          />
        </div>
      </div>
      <div className="action-buttons-container">
        <button onClick={stepBack} className="infobtn">
          BACK TO PRODUCTS
        </button>
      </div>
    </div>
  );
}
