import React from "react";
import "./brandCard.styles.css";

export default function BrandCard({ opts }) {
  const { name, img } = opts;
  return (
    <div className="brandcard-container">
      <img className="brand-img" src={img} alt="brand-logo" />
      {/* <h2>{name}</h2> */}
    </div>
  );
}
