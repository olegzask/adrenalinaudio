import React from "react";
import { FaClipboardList } from "react-icons/fa";
import "./feat.styles.css";

export default function Features({ product }) {
  const { features } = product;
  return (
    <div className="features-container">
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
    </div>
  );
}
