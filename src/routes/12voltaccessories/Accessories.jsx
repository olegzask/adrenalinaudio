import React from "react";
import { allAccessories } from "./accessories";
import DashcamCard from "../dashcams/DashcamCard";
import AccessoryCard from "./AccessoryCard";

export default function Accessories() {
  return (
    <div className="accessories-container">
      <div className="rs-main-container dashcams-main-container">
        <div className="rs-container">
          <div className="rs-topper">
            <h2 className="service-container-header tint-header rs-serv-header">
              12 VOLT <span className="our-services">ACCESSORIES</span>
            </h2>

            <span className="rs-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              sequi perspiciatis ad tempora quidem ipsum, ratione aut in harum
              molestias voluptate. Sint rerum corporis possimus laudantium
              aliquam commodi quis ex laboriosam vel dolor quibusdam, placeat
              alias necessitatibus perspiciatis impedit delectus tenetur. Illo
              velit quisquam mollitia, reiciendis unde similique non. Tempora.
            </span>
            <br />

            <h2 className="rs-description-lower">
              NOT SURE WHAT KIND OF ACCESSORY YOU NEED? EXPLORE OUR OPTIONS!
            </h2>
          </div>
          {allAccessories.map((remote, id) => (
            <AccessoryCard key={id} options={remote} />
          ))}
        </div>
      </div>
    </div>
  );
}
