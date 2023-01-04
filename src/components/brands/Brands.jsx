import React from "react";
import { brands } from "./brandlist";
import BrandCard from "./BrandCard";
import "./brands.styles.css";

export default function Brands() {
  return (
    <div className="brands-container">
      <h2>Brands We Trust</h2>
      {brands.map((brand) => (
        <BrandCard opts={brand} />
      ))}
    </div>
  );
}
