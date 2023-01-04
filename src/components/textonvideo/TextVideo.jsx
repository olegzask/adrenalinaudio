import React from "react";
import LinkComponent from "../link/LinkComponent";
import "./textvideo.styles.css";

export default function TextVideo() {
  return (
    <div className="text-on-video">
      <div className="text-top">
        <span className="text-header">TINT / PPF</span>
        <span className="text-header">REMOTE START</span>
        <span className="text-header">AUDIO / VIDEO</span>
      </div>

      <div className="text-bottom">
        <p className="text-main">
          22 Years in business. Let our team of professionals take care of your
          vehicle.
        </p>
      </div>
      <LinkComponent
        opts={{
          name: "BROWSE OUR SERVICES",
          linkTo: "services",
          clName: "texton-video",
        }}
      />
    </div>
  );
}
