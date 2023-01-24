import React from "react";
import CarAudioCard from "./CarAudioCard";
import { carAudioProducts } from "./caraudioproducts";

export default function CarAudio() {
  return (
    <div className="accessories-container">
      <div className="rs-main-container dashcams-main-container">
        <div className="rs-container">
          <div className="rs-topper">
            <h2 className="service-container-header tint-header rs-serv-header">
              AUDIO <span className="our-services">/ VIDEO</span>
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
              NOT SURE WHAT KIND OF CAR AUDIO / VIDEO PRODUCT YOU NEED? EXPLORE
              OUR OPTIONS!
            </h2>
          </div>
          {carAudioProducts.map((remote, id) => (
            <CarAudioCard key={id} options={remote} />
          ))}
        </div>
      </div>
    </div>
  );
}
