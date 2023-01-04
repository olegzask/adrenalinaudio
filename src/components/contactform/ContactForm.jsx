import React, { useState } from "react";
import "./contactform.styles.css";

export const ContactForm = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const fieldsChecker = () => {
    const missingFields = [];
    Object.entries(formInfo).map((el) => {
      if (el[1] === "") {
        missingFields.push(el[0]);
      }
    });
    if (missingFields.length === 0) {
      alert("Your Request is submitted! ");
      clearFields();
    } else {
      alert(
        `Following fields are missing: ${missingFields.map(
          (el) => el
        )}. Please check.`
      );
    }
  };

  const clearFields = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const commentsInput = document.getElementById("comments");

    setFormInfo({ name: "", email: "", phone: "", comments: "" });

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    commentsInput.value = "";
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormInfo({ ...formInfo, [inputName]: inputValue });
  };

  const submitRequest = () => {
    fieldsChecker();
  };

  return (
    <div className="contactform-container">
      <h2 className="contactform-header">Let's chat over a brew.</h2>
      <h3 className="contactform-header-two">
        Coffee, tea, or something stronger...
      </h3>
      <input
        autoComplete="off"
        id="name"
        onChange={handleChange}
        className="form-input"
        type="text"
        name="name"
        placeholder="Your name"
      />
      <input
        autoComplete="off"
        id="email"
        onChange={handleChange}
        className="form-input"
        type="email"
        name="email"
        placeholder="Your email"
      />
      <input
        autoComplete="off"
        id="phone"
        onChange={handleChange}
        className="form-input"
        type="number"
        name="phone"
        placeholder="Your phone number"
      />
      <textarea
        autoComplete="off"
        id="comments"
        onChange={handleChange}
        className="form-comment"
        name="comments"
        placeholder="How can we help?"
      ></textarea>
      <button className="submit-request" onClick={submitRequest}>
        SUBMIT REQUEST
      </button>
    </div>
  );
};
