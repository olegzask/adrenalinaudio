import React, { useState, useEffect } from "react";
import { RadioButtons } from "./radio-buttons";
import { Button } from "../button-component/button";
import { tintShades } from "./tint-data";
import { tintParts } from "./tintParts";

import "./simulator-tint.styles.css";

const tintPrices = {
  car: { fronts: 120, rears: 120, rearws: 120, wsbrow: 80 },
  suv: { fronts: 120, rears: 120, rearws: 100, wsbrow: 80 },
  pickup: { fronts: 120, rears: 120, rearws: 100, wsbrow: 80 },
};

export const Test = () => {
  const [frontglass, setFrontGlass] = useState();
  const [rearsideglass, setRearSideGlass] = useState();
  const [rearwindshield, setRearWindshield] = useState();
  const [windshieldbrow, setWindshieldBrow] = useState();
  const [price, setPrice] = useState({
    frontglass: 0,
    rearsideglass: 0,
    rearwindshield: 0,
    windshieldbrow: 0,
  });
  const [vehicle, setVehicle] = useState("car");
  const [selectedParts, setSelectedParts] = useState([]);

  const totalPrice = Object.values(price).reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  const whatVehicle = () => {
    if (vehicle === "car") return tintPrices.car;
    if (vehicle === "pickup") return tintPrices.pickup;
    if (vehicle === "suv") return tintPrices.suv;
  };

  useEffect(() => {
    selectedParts.map((el) => {
      const name = el + "";
      if (name in price && name === "frontglass")
        setPrice({
          ...price,
          [name]: whatVehicle().fronts,
        });
      if (name in price && name === "rearsideglass")
        setPrice({ ...price, [name]: whatVehicle().rears });
      if (name in price && name === "rearwindshield")
        setPrice({
          ...price,
          [name]: whatVehicle().rearws,
        });
      if (name in price && name === "windshieldbrow")
        setPrice({ ...price, [name]: whatVehicle().wsbrow });
    });
  }, [selectedParts]);

  const vehicleSelector = (event) => {
    setPrice({
      frontglass: 0,
      rearsideglass: 0,
      rearwindshield: 0,
      windshieldbrow: 0,
    });
    setSelectedParts([]);
    Array.from(document.getElementsByClassName("shade-number")).map((el) =>
      el.classList.remove("shade-clicked")
    );
    const vehicleType = event.target.value;
    if (vehicleType) setVehicle(vehicleType.toLowerCase());
  };

  const clicked = (event) => {
    Array.from(event.target.closest(".glass-container").children).map((num) =>
      num.classList.remove("shade-clicked")
    );

    const el = event.target;
    if (event.target.classList.contains("shade-number")) {
      const id = event.target.closest(".glass-container").getAttribute("id");
      const number = +el.innerHTML; //Shade %,
      el.classList.add("shade-clicked");

      Array.from(document.getElementsByClassName(`part-${id}`)).map((el) => {
        el.classList.remove("part-active");
        el.style.opacity = 0;
      });

      const tintImg = document.getElementById(`${id}-tint`);
      tintImg.classList.add("part-active");
      tintImg.style.opacity = 1 - number / 100;

      if (!selectedParts.includes(id))
        setSelectedParts((selectedParts) => [...selectedParts, id]);

      if (id === "frontglass") setFrontGlass(number);
      if (id === "rearsideglass") setRearSideGlass(number);
      if (id === "rearwindshield") setRearWindshield(number);
      if (id === "windshieldbrow") setWindshieldBrow(number);
    }
  };

  return (
    <div className="simulator-ppf-container">
      <div className="simulator-rightside">
        <div className="images-container">
          <img
            className="simulator-ppf-img tint-img"
            src={`images/simulator-images/${vehicle}.jpg`}
            alt="vehicle-img"
          />
          {Object.entries(tintParts).map((el) => {
            const [partName, link] = el;

            return (
              <img src={link} id={`${partName}-tint`} className="part-tint" />
            );
          })}
        </div>
        <span className="note">
          *Please note, real-life result may look slightly different
        </span>
      </div>

      <div className="opts-container">
        <div className="radio-buttons-container">
          <RadioButtons options={{ vehicleSelector }} />
        </div>
        <div className="parts-container">
          <div className="parts-opts">
            <div className="shades">
              <span className="shades-header">Front Side Glass</span>
              <div
                onClick={clicked}
                className="glass-container"
                id="frontglass"
                value={frontglass}
              >
                {tintShades.map((shade, id) => {
                  return (
                    <span key={id} className="shade-number front-side">
                      {shade}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="shades">
              <span className="shades-header">Rear Side Glass</span>
              <div
                onClick={clicked}
                className="glass-container"
                id="rearsideglass"
              >
                {tintShades.map((shade, id) => {
                  return (
                    <span key={id} className="shade-number">
                      {shade}
                    </span>
                  );
                })}
              </div>
            </div>{" "}
            <div className="shades">
              <span className="shades-header">Rear Windshield</span>
              <div
                onClick={clicked}
                className="glass-container"
                id="rearwindshield"
              >
                {tintShades.map((shade, id) => {
                  return (
                    <span key={id} className="shade-number">
                      {shade}
                    </span>
                  );
                })}
              </div>
            </div>{" "}
            <div className="shades">
              <span className="shades-header">Windshield Brow</span>
              <div
                onClick={clicked}
                className="glass-container"
                id="windshieldbrow"
              >
                {tintShades.map((shade, id) => {
                  return (
                    <span key={id} className="shade-number">
                      {shade}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="price-tint">
            <span className="price-total">{`Estimated Price: $${totalPrice}`}</span>
            <Button
              options={{
                text: "GET QUOTE",
                className: "btn-tint-simulator",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
