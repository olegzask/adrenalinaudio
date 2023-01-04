import React from "react";
import { tintOptions } from "./tintOptions";
import { TintCard } from "./tint-card";

import "./autotint.styles.css";

const Automotivetint = () => {
  return (
    <div className="autotint-main-container">
      <div className="autotint-container">
        <div className="tint-topper">
          <h2 className="service-container-header tint-header">
            WINDOW <span className="our-services">TINT</span>
          </h2>

          <span className="tint-description">
            With so many window tint films available, making the perfect choice
            for your vehicle has never been easier. From the latest, top of the
            line nano-ceramic, high performance metallic hybrid, and even
            traditional dyed window tint options, there's a PRIME ™ film for
            every application. It outperforms other types of tint to keep you
            comfortable and protected. All PRIME Window Tint is backed by
            lifetime transferable warranty.
          </span>
          <br />

          <span className="tint-description-lower">
            NOT SURE WHAT KIND OF WINDOW FILM YOU NEED? EXPLORE OUR OPTIONS!
          </span>
        </div>

        {tintOptions.map((opt, id) => {
          return <TintCard key={id} options={opt} />;
        })}
      </div>
    </div>
  );
};
export default Automotivetint;
