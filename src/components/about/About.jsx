import React from "react";
import LinkComponent from "../link/LinkComponent";
import "./about.styles.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-top-text">
        For over 22 Years, Adrenalin Audio has been delivering{" "}
        <span className="about-top-bold">
          best quality products and services in Edmonton, Alberta.
        </span>
      </div>
      <div className="about-bottom-text">
        <p className="about-paragraph">
          We are the company where you, as a customer come firdst. We strive for
          100% satisfaction for all customers and will not stop until you are
          happy with the end result.
        </p>
        <p className="about-paragraph">
          Our after care service will make sure that any isues will be solved in
          case they arise. We are here for you!
        </p>
      </div>
    </div>
  );
}
