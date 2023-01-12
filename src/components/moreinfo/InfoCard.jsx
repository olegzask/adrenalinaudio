import React, { useContext, useState } from "react";
import { BooleanContext } from "../../store";
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

  return (
    <div className="infocard-container">
      <div className="model-nav-container">
        <div className="model-container">
          <span className="model-name">
            {category}: {model}
          </span>
        </div>
        <div className="info-nav">
          <button>Overview</button>
          <button>Specs</button>
        </div>
      </div>

      <div className="pics-container">
        <img className="main-product-img" src={imgColor} alt="product image" />

        <div className="allpics-container">
          {images.map((path, id) => (
            <img src={path} key={id} className="product-img" />
          ))}
        </div>
      </div>

      <div className="about-product-container"></div>

      <div className="product-features-container"></div>

      <div className="action-buttons-container"></div>

      <div className="apple-google-stores-container">
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
  );
}
