import React from "react";
import { BsArrowRight } from "react-icons/bs";
import LinkComponent from "../../components/link/LinkComponent";
import "./servicecard.styles.css";

export default function ServiceCard({ opts }) {
  const { name, description, image, link } = opts;

  return (
    <div className="servicecard-container">
      <div className="servicecard-left-side">
        <h2 className="service-name">{name}</h2>
        <span className="service-description">{description}</span>
        <div className="service-link-container">
          <LinkComponent
            opts={{
              name: "BROWSE",
              linkTo: link,
              clName: "service-btn",
            }}
          />
          {/* <LinkComponent
            opts={{
              name: "CONTACT US",
              linkTo: "contact",
              clName: "service-btn",
            }}
          /> */}
        </div>
      </div>

      <div className="servicecard-right-side">
        <img className="service-img" src={image} alt="service-image" />
      </div>
    </div>
  );
}
