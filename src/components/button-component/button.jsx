import React from "react";
import "./button.styles.css";

export const Button = ({ options }) => {
  const { text, className, link, clickFunc } = options;
  return (
    <a className="linkec" href={link}>
      <button onClick={clickFunc} className={`btn ${className}`}>
        {text}
      </button>
    </a>
  );
};
