import React from "react";
import "./video.styles.css";

export default function Video() {
  return (
    <div className="video-container">
      <video
        className="main-video"
        src="videos/vid2.mp4"
        autoPlay="autoplay"
        muted={true}
        loop
      />
    </div>
  );
}
