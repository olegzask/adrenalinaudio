import React from "react";
import { marineProducts } from "./marineproducts";
import MarineCard from "./MarineCard";

export default function Marine() {
  return (
    <div className="accessories-container">
      <div className="rs-main-container dashcams-main-container">
        <div className="rs-container">
          <div className="rs-topper">
            <h2 className="service-container-header tint-header rs-serv-header">
              MARINE <span className="our-services">AUDIO</span>
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
              NOT SURE WHAT KIND OF MARINE PRODUCT YOU NEED? EXPLORE OUR
              OPTIONS!
            </h2>
          </div>
          {marineProducts.map((remote, id) => (
            <MarineCard key={id} options={remote} />
          ))}
        </div>
      </div>
    </div>
  );
}
