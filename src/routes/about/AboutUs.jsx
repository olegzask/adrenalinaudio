import React from "react";
import LinkComponent from "../../components/link/LinkComponent";
import About from "../../components/about/About";
import "./aboutus.styles.css";

export default function AboutUs() {
  return (
    <div id="about-el" className="about-page-container">
      <h2 className="service-container-header abt-header">
        ABOUT <span className="our-services">OUR COMPANY</span>
      </h2>
      <About />
      <div className="about-more-info">
        <h2 className="service-container-header abt-header">
          OUR <span className="our-services">SPECIALIZATIONS</span>
        </h2>
        <ul>
          <li>Window Tint</li>
          <li>Paint Protection Film</li>
          <li>Remote Starts</li>
          <li>Automotive Audio & Video</li>
          <li>Marine Audio</li>
          <li>12 Volt Accessories</li>
        </ul>
      </div>
      <div className="abt-btns-cnt">
        <LinkComponent
          opts={{
            name: "GET IN TOUCH WITH US",
            linkTo: "contact",
            clName: "abt-btn",
          }}
        />
        <LinkComponent
          opts={{
            name: "BROWSE SERVICES",
            linkTo: "services",
            clName: "abt-btn",
          }}
        />
      </div>
    </div>
  );
}
