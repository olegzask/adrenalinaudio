import React from "react";
import DashcamCard from "./DashcamCard.jsx";
import { dashcams } from "./dashcamlist";
import "./dashcams.styles.css";

export default function Dashcams() {
  const scrollToRemote = (e) => {
    const idToFind = e.target.innerHTML;
    const goodEl = document.getElementById(idToFind);
    goodEl.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <div className="rs-main-container dashcams-main-container">
      <div className="rs-container">
        <div className="rs-topper">
          <h2 className="service-container-header tint-header rs-serv-header">
            DASH <span className="our-services">CAMERAS</span>
          </h2>

          <span className="rs-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
            perspiciatis ad tempora quidem ipsum, ratione aut in harum molestias
            voluptate. Sint rerum corporis possimus laudantium aliquam commodi
            quis ex laboriosam vel dolor quibusdam, placeat alias necessitatibus
            perspiciatis impedit delectus tenetur. Illo velit quisquam mollitia,
            reiciendis unde similique non. Tempora.
          </span>
          <br />

          <h2 className="rs-description-lower">
            NOT SURE WHAT KIND OF DASH CAMERA YOU NEED? EXPLORE OUR OPTIONS!
          </h2>
        </div>
        {dashcams.map((remote, id) => (
          <DashcamCard key={id} options={remote} />
        ))}
      </div>
    </div>
  );
}
