import React from "react";

export default function SuccessWindow({ fields }) {
  const { handler, errHandler } = fields;

  const closeWindow = () => {
    handler(false);
    errHandler(false);
  };
  return (
    <div className="error-window-container">
      <h2 className="error-header">REQUEST IS SENT!</h2>
      <div className="msg-container">
        <h3 className="error-header-check">
          Thank you for submitting your request!
        </h3>
        <div className="errors-container">
          <h2>We will get back to you as soon as we can!</h2>
          <h2 className="success-msg">
            If for some reason you will not hear from us within 1 business day,
            please feel free to give us a call or send another message!
          </h2>
        </div>
      </div>
      <button onClick={closeWindow} className="close-succ">
        GO BACK
      </button>
    </div>
  );
}
