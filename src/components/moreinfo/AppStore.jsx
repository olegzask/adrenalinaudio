import React from "react";

export default function AppStore({ info }) {
  const { appleLink, googleLink } = info;
  return (
    <div className="apple-google-stores-container">
      <span className="app-header">Download the App</span>
      <div className="appstore">
        <a href={appleLink} target="_blank" className="store-img">
          <img src="/logos/app-store.svg" alt="apple-store-button" />
        </a>
        <a href={googleLink} target="_blank" className="store-img">
          <img src="/logos/google-play.svg" alt="apple-store-button" />
        </a>
      </div>
    </div>
  );
}
