import React from "react";
import { remotes } from "./remoteslist";
import RemoteCard from "./RemoteCard";
import "./remotestart.styles.css";

export default function RemoteStart() {
  const showModel = (e) => {
    const parentCont = e.target.closest(".remote-card-container");
    const arr = Array.from(parentCont.children)[1];
    const newArr = Array.from(arr.children)[0];
    const remModel = Array.from(newArr.children)[0].innerHTML;
    setModel(remModel);
  };

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
    <div className="rs-main-container">
      <div className="rs-container">
        <div className="rs-topper">
          <h2 className="service-container-header tint-header rs-serv-header">
            REMOTE <span className="our-services">START</span>
          </h2>

          <span className="rs-description">
            With so many window tint films available, making the perfect choice
            for your vehicle has never been easier. From the latest, top of the
            line nano-ceramic, high performance metallic hybrid, and even
            traditional dyed window tint options, there's a PRIME ™ film for
            every application. It outperforms other types of tint to keep you
            comfortable and protected. All PRIME Window Tint is backed by
            lifetime transferable warranty.
          </span>
          <br />
          <div className="quick-links">
            <h2 className="ql-hdr">Quick Links</h2>
            <div className="ql">
              <button className="quick-link" onClick={scrollToRemote}>
                X1R
              </button>
              <button className="quick-link" onClick={scrollToRemote}>
                T12SS
              </button>
              <button className="quick-link" onClick={scrollToRemote}>
                Q9SS
              </button>
              <button className="quick-link" onClick={scrollToRemote}>
                T9FM
              </button>
              <button className="quick-link" onClick={scrollToRemote}>
                G15SS
              </button>
              <button className="quick-link" onClick={scrollToRemote}>
                G15FM
              </button>
            </div>
          </div>

          <h2 className="rs-description-lower">
            NOT SURE WHAT KIND OF REMOTE START YOU NEED? EXPLORE OUR OPTIONS!
          </h2>
        </div>
        {remotes.map((remote, id) => (
          <RemoteCard key={id} options={remote} />
        ))}
      </div>
    </div>
  );
}
