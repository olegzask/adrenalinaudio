import React, { useContext } from "react";
import { BooleanContext } from "../../store";

export default function Overview({ product }) {
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
    <div className="overview-container">
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
    </div>
  );
}
