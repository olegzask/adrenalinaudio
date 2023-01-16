import React from "react";

export default function AppStore() {
  return (
    <div className="apple-google-stores-container">
      <span className="app-header">Download the App</span>
      <div className="appstore">
        <img
          className="store-img"
          src="/logos/app-store.svg"
          alt="apple-store-button"
        />
        <img
          className="store-img"
          src="/logos/google-play.svg"
          alt="apple-store-button"
        />
      </div>
    </div>
  );
}
