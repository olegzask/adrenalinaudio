import React from "react";
import { ppfOptions } from "../paintprotection/ppfOpts";
import { PpfCard } from "./PpfCard";

import "../autotint/autotint.styles.css";
import "./ppf.styles.css";

export default function PaintProtection() {
  return (
    <div className="autotint-main-container">
      <div className="autotint-container">
        <div className="tint-topper">
          <h2 className="service-container-header tint-header ppf-header">
            PAINT <span className="our-services">PROTECTION</span>
          </h2>

          <span className="tint-description">
            Don't let your paint, exterior & interior surfaces take a beating.
            Explore a variety of protective films perfect for any application
            available for your vehicle. Protect your investment!
          </span>
          <br />

          <span className="tint-description-lower">
            NOT SURE WHAT KIND OF FILM YOU NEED? EXPLORE OUR OPTIONS!
          </span>
        </div>

        {ppfOptions.map((opt, id) => {
          return <PpfCard key={id} options={opt} />;
        })}
      </div>
    </div>
  );
}
