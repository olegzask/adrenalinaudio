import React, { useState } from "react";
import Booking from "../remotestart/Booking";
import LinkComponent from "../../components/link/LinkComponent";
import "../autotint/tint-card.styles.css";

export const PpfCard = ({ options }) => {
  const { tintType, description, shades, features, img } = options;

  const [modal, setModal] = useState(false);
  const showModal = (e) => {
    setModal(true);
  };

  return (
    <div className="card-container">
      <div className="tint-card-left">
        <h2 className="card-header">{tintType}</h2>
        <img className="card-img" src={img} alt="" />
        <span className="card-description">{description}</span>
        <div className="shades-ctn">
          {shades ? (
            <header className="shade-header">SHADES AVAILABLE:</header>
          ) : null}

          {shades ? (
            <span className="tint-shades">
              {shades.map((shade, id) =>
                id < shades.length - 1 ? `${shade}  /  ` : `${shade}`
              )}
            </span>
          ) : null}
        </div>

        <div className="btns-container">
          <LinkComponent
            opts={{
              name: "SIMULATOR",
              linkTo: "simulator",
              clName: "tint-btn",
            }}
          />
          {!modal ? null : (
            <Booking opts={{ rem: "PPF", txt: "Service", reset: setModal }} />
          )}
          <button onClick={showModal} className="remote-btn">
            BOOK NOW
          </button>
        </div>
      </div>

      <div className="tint-card-right">
        <h2 className="features-header">SIGNATURE FEATURES</h2>
        <div className="features-list">
          {features.map((feat, id) => {
            const { symbol, description, name } = feat;

            return (
              <div key={id} className="feature-g">
                <header className="feat-name">{name}</header>

                <div className="feat-container-g">
                  <div className="feature-icon">{symbol}</div>
                  <span className="feat-description">{description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
