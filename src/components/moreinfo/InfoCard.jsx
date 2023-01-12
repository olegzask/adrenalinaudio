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

  const changeImg = (e) => {
    const imgSource = e.target.src;
    const mainImg = document.getElementById("main-pic");
    mainImg.src = imgSource;
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
          <button className="info-btn">App</button>
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

      <div className="about-product-container"></div>

      <div className="product-features-container">
        <h2 className="quick-description">Product Description</h2>
        <ul className="prod-list">
          {description.map((el) => (
            <li className="description-point">{el}</li>
          ))}
        </ul>
      </div>

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
