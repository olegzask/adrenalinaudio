import React from "react";
import "./error.styles.css";

export default function ErrorWindow({ fields }) {
  const { handler, info } = fields;

  const closeErr = () => {
    handler(false);
  };
  return (
    <div className="error-window-container">
      <h2 className="error-header">SOME INFO IS MISSING</h2>
      <h3 className="error-header-check">Please check following...</h3>
      <div className="errors-container">
        {info.map((field, id) => (
          <span className="field" key={id}>
            {field}
          </span>
        ))}
      </div>
      <button onClick={closeErr} className="close-error">
        GO BACK
      </button>
    </div>
  );
}
