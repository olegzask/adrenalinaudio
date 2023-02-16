import React, { useContext } from "react";
import { BooleanContext } from "../../store.js";
import { services } from "./servicelist.js";
import ServiceCard from "./ServiceCard";
import "./services.styles.css";

export default function Services() {
  const { clickedOn } = useContext(BooleanContext);

  return (
    <div
      id="services-el"
      className={`services-container ${clickedOn ? "gotme" : null}`}
    >
      <h2 id="huevo" className="service-container-header">
        OUR <span className="our-services">SERVICES</span>
      </h2>
      {services.map((serv, id) => (
        <ServiceCard key={id} opts={serv} />
      ))}
    </div>
  );
}
