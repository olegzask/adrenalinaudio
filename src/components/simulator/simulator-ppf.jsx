import React, { useEffect, useState, forceUpdate } from "react";
import { partsPpfSedan, partsPpfSuv, partsPpfTruck } from "./parts";
import { ppfPartsSedan, ppfPartsSuv, ppfPartsTruck } from "./ppf-parts-list";
import { RadioButtons } from "./radio-buttons";
import LinkComponent from "../link/LinkComponent";
import { Button } from "../button-component/button";
import "./simulator-ppf.styles.css";

const prices = {
  car: {
    hoodfenders: 489.95,
    frontbumper: 689.95,
    rearbumper: 689.95,
    apillarsroofline: 189.95,
    grille: 299.95,
    mirrorsdoorcups: 149.95,
    headlamps: 159.95,
    luggagearea: 89.95,
    rockers: 649.95,
  },
  truck: {
    hoodfenders: 524.95,
    frontbumper: 689.95,
    rearbumper: 479.95,
    apillarsroofline: 189.95,
    grille: 299.95,
    mirrorsdoorcups: 149.95,
    headlamps: 159.95,
    rockers: 699.95,
    tailgate: 399.95,
  },
  suv: {
    hoodfenders: 524.95,
    frontbumper: 709.95,
    rearbumper: 709.95,
    apillarsroofline: 189.95,
    grille: 299.95,
    mirrorsdoorcups: 149.95,
    headlamps: 169.95,
    luggagearea: 89.95,
    rockers: 689.95,
  },
};

const initPrice = {
  hoodfenders: 0,
  frontbumper: 0,
  mirrorsdoorcups: 0,
  headlamps: 0,
  luggagearea: 0,
  rockers: 0,
  tailgate: 0,
  apillarsroofline: 0,
  rearbumper: 0,
  grille: 0,
};

export const SimulatorPpf = () => {
  const [linked, setLinked] = useState(ppfPartsSedan);
  const [linkedOpts, setLinkedOpts] = useState(partsPpfSedan);
  const [vehicle, setVehicle] = useState("car");
  const [coverage, setCoverage] = useState("full");
  const [price, setPrice] = useState({
    hoodfenders: 0,
    frontbumper: 0,
    mirrorsdoorcups: 0,
    headlamps: 0,
    luggagearea: 0,
    rockers: 0,
    tailgate: 0,
    apillarsroofline: 0,
    rearbumper: 0,
    grille: 0,
  });

  const totalPrice = Object.values(price).reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  const toggleCoverage = (event) => {
    setPrice({ ...price, hoodfenders: 0 });
    Array.from(document.getElementsByClassName("fp-button")).map((el) => {
      el.classList.remove("button-inactive");
      el.classList.remove("button-selected");
    });

    document.getElementById("img_hoodfendersfull").classList.remove("checked");
    document
      .getElementById("img_hoodfenderspartial")
      .classList.remove("checked");

    event.target.closest(".yes-no").children[0].checked = false;

    if (event.target.id === "full") {
      setCoverage("full");

      event.target.classList.add("button-selected");
      document.getElementById("partial").classList.add("button-inactive");
    }
    if (event.target.id === "partial") {
      setCoverage("partial");

      event.target.classList.add("button-selected");
      document.getElementById("full").classList.add("button-inactive");
    }
  };

  const showImgPart = (name, state = true) => {
    const searchImgId = `img_${name}`;
    const imgDoc = document.getElementById(searchImgId);
    if (state) imgDoc.classList.add("checked");
    if (!state) imgDoc.classList.remove("checked");
  };

  const checked = (event) => {
    const el = event.target;

    if (vehicle === "car") {
      if (
        document.getElementById("rearbumper").checked &&
        document.getElementById("luggagearea").checked
      ) {
        document.getElementById("luggagearea").checked = false;
        document.getElementById("img_luggagearea").classList.remove("checked");
      }

      if (el.checked && el.id !== "hoodfenders") {
        showImgPart(el.id, true);
        setPrice({ ...price, [el.id]: prices.car[el.id] });
      }
      if (
        el.checked &&
        el.id !== "hoodfenders" &&
        !document.getElementById("luggagearea").checked
      ) {
        showImgPart(el.id, true);
        setPrice({ ...price, [el.id]: prices.car[el.id], luggagearea: 0 });
      }

      if (!el.checked && el.id !== "hoodfenders") {
        showImgPart(el.id, false);
        setPrice({ ...price, [el.id]: 0 });
      }

      if (el.checked && el.id === "hoodfenders" && coverage === "partial") {
        showImgPart(`${el.id}partial`, true);
        setPrice({ ...price, [el.id]: prices.car[el.id] });
      }
      if (!el.checked && el.id === "hoodfenders" && coverage === "partial") {
        showImgPart(`${el.id}partial`, false);
        setPrice({ ...price, [el.id]: 0 });
      }

      if (el.checked && el.id === "hoodfenders" && coverage === "full") {
        showImgPart(`${el.id}full`, true);
        setPrice({ ...price, [el.id]: prices.car[el.id] + 800 });
      }
      if (!el.checked && el.id === "hoodfenders" && coverage === "full") {
        showImgPart(`${el.id}full`, false);
        setPrice({ ...price, [el.id]: 0 });
      }
    }

    if (vehicle === "suv") {
      if (
        document.getElementById("rearbumper").checked &&
        document.getElementById("luggagearea").checked
      ) {
        document.getElementById("luggagearea").checked = false;
        document.getElementById("img_luggagearea").classList.remove("checked");
      }

      if (el.checked && el.id !== "hoodfenders") {
        showImgPart(el.id, true);
        setPrice({ ...price, [el.id]: prices.suv[el.id] });
      }
      if (
        el.checked &&
        el.id !== "hoodfenders" &&
        !document.getElementById("luggagearea").checked
      ) {
        showImgPart(el.id, true);
        setPrice({ ...price, [el.id]: prices.suv[el.id], luggagearea: 0 });
      }

      if (!el.checked && el.id !== "hoodfenders") {
        showImgPart(el.id, false);
        setPrice({ ...price, [el.id]: 0 });
      }

      if (el.checked && el.id === "hoodfenders" && coverage === "partial") {
        showImgPart(`${el.id}partial`, true);
        setPrice({ ...price, [el.id]: prices.suv[el.id] });
      }
      if (!el.checked && el.id === "hoodfenders" && coverage === "partial") {
        showImgPart(`${el.id}partial`, false);
        setPrice({ ...price, [el.id]: 0 });
      }

      if (el.checked && el.id === "hoodfenders" && coverage === "full") {
        showImgPart(`${el.id}full`, true);
        setPrice({ ...price, [el.id]: prices.suv[el.id] + 800 });
      }
      if (!el.checked && el.id === "hoodfenders" && coverage === "full") {
        showImgPart(`${el.id}full`, false);
        setPrice({ ...price, [el.id]: 0 });
      }
    }

    if (vehicle === "truck") {
      if (el.checked && el.id !== "hoodfenders") {
        showImgPart(el.id, true);
        setPrice({ ...price, [el.id]: prices.truck[el.id] });
      }

      if (!el.checked && el.id !== "hoodfenders") {
        showImgPart(el.id, false);
        setPrice({ ...price, [el.id]: 0 });
      }

      if (el.checked && el.id === "hoodfenders" && coverage === "partial") {
        showImgPart(`${el.id}partial`, true);
        setPrice({ ...price, [el.id]: prices.truck[el.id] });
      }
      if (!el.checked && el.id === "hoodfenders" && coverage === "partial") {
        showImgPart(`${el.id}partial`, false);
        setPrice({ ...price, [el.id]: 0 });
      }

      if (el.checked && el.id === "hoodfenders" && coverage === "full") {
        showImgPart(`${el.id}full`, true);
        setPrice({ ...price, [el.id]: prices.truck[el.id] + 800 });
      }
      if (!el.checked && el.id === "hoodfenders" && coverage === "full") {
        showImgPart(`${el.id}full`, false);
        setPrice({ ...price, [el.id]: 0 });
      }
    }
  };
  const vehicleSelector = (event) => {
    const vehicleType = event.target.value;
    if (vehicleType && vehicleType === "car") {
      setLinked(ppfPartsSedan);
      setLinkedOpts(partsPpfSedan);
      setVehicle(vehicleType.toLowerCase());
      return;
    }
    if (vehicleType && vehicleType === "truck") {
      setLinked(ppfPartsTruck);
      setLinkedOpts(partsPpfTruck);
      setVehicle(vehicleType.toLowerCase());
      return;
    }
    if (vehicleType && vehicleType === "suv") {
      setLinked(ppfPartsSuv);
      setLinkedOpts(partsPpfSuv);
      setVehicle(vehicleType.toLowerCase());
      return;
    }
  };
  return (
    <div className="simulator-ppf-container">
      <div className="simulator-rightside">
        <div className="images-container">
          <img
            className="simulator-ppf-img"
            src={`images/simulator-images/${vehicle}.jpg`}
            alt="vehicle-img"
          />
          {Object.entries(linked).map((el) => {
            const name = el[0];
            const link = el[1];
            return (
              <img
                key={name}
                id={"img_" + name.replace(/&|,| |-|_/g, "")}
                className="part"
                src={link}
                alt="vehicle-part"
              />
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
          {linkedOpts.map((part, id) => {
            return (
              <div key={id} className="part-container">
                <span className="part-name">
                  {part
                    .toLowerCase()
                    .split(" ")
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(" ")}{" "}
                </span>
                <div className="yes-no">
                  <input
                    onClick={checked}
                    className="checkbox"
                    id={part.replace(/&|,| |-/g, "")}
                    type="checkbox"
                  />
                  {part === "hood & fenders" ? (
                    <div className="full-partial-container">
                      {" "}
                      <button
                        onClick={toggleCoverage}
                        className="fp-button button-selected"
                        id="full"
                      >
                        FULL
                      </button>
                      <button
                        onClick={toggleCoverage}
                        id="partial"
                        className="fp-button"
                      >
                        PARTIAL
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}

          <div className="price-container">
            <span className="price">{`Estimated Price: $${totalPrice.toFixed(
              2
            )}`}</span>
            <LinkComponent
              opts={{
                name: "CONTACT US",
                linkTo: "contact",
                clName: "btn-sim",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
