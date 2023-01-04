import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./booking.styles.css";

export default function Booking({ opts }) {
  const { rem, reset, txt } = opts;
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    vehicle: "",
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
      closeForm();
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
    const vehicleInput = document.getElementById("vehicle");

    setFormInfo({ name: "", email: "", phone: "", comments: "", vehicle: "" });

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    commentsInput.value = "";
    vehicleInput.valie = "";
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormInfo({ ...formInfo, [inputName]: inputValue });
  };

  const submitRequest = () => {
    fieldsChecker();
  };

  const closeForm = () => {
    reset("");
  };

  return (
    <div id="bookingForm" className="contactform-container booking-container">
      <div className="close-hdr">
        <h2 className="contactform-header booking-header">
          Send booking request
        </h2>
        <MdClose onClick={closeForm} className="booking-close" />
      </div>

      <h3 className="contactform-header-two">
        Fill out some info & we will get back to you!
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
      <div className="vehicle-info">
        <input
          disabled={true}
          autoComplete="off"
          id="rs-model"
          className="form-input"
          type="text"
          name="rs-model"
          value={`${txt}: ${rem}`}
        />
        <input
          autoComplete="off"
          id="vehicle"
          onChange={handleChange}
          className="form-input"
          type="text"
          name="vehicle"
          placeholder="Vehicle's make & model?"
        />
      </div>

      <textarea
        autoComplete="off"
        id="comments"
        onChange={handleChange}
        className="form-comment"
        name="comments"
        placeholder="Any specific questions? Desired date for install?"
      ></textarea>
      <button className="submit-request" onClick={submitRequest}>
        SUBMIT REQUEST
      </button>
    </div>
  );
}
