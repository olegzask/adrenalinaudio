import React, { useState, useRef } from "react";
import ErrorWindow from "../errorWindow/ErrorWindow";
import SuccessWindow from "../successWindow/SuccessWindow";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./applicationcard.styles.css";

export default function ApplicationCard({ opts }) {
  const { name, jobs } = opts;
  const [heh] = jobs;
  const { jobBen, jobReq, jobResp } = heh;
  const [missing, setMissing] = useState();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [errorBooking, setErrorBooking] = useState(false);
  const [requestSent, setRequest] = useState(false);

  const form = useRef();

  const updateUserInfo = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, [e.target.name]: value });
  };
  const clearFields = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const commentsInput = document.getElementById("comments");
    const resumeInput = document.getElementById("resume-file");

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    commentsInput.value = "";
    resumeInput.value = "";

    setUserInfo({ name: "", email: "", phone: "", comments: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    fieldsChecker();
  };

  const fieldsChecker = () => {
    const missingFields = [];
    Object.entries(userInfo).map((el) => {
      if (el[1] === "") {
        missingFields.push(el[0]);
      }
    });
    if (missingFields.length === 0) {
      emailjs
        .sendForm(
          "service_52hwkbv",
          "template_6qijcwj",
          form.current,
          "EdFYBsAAe4ETIUbxP",
          this
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setRequest(true);
      clearFields();
    } else {
      setMissing(missingFields);
      setErrorBooking(true);
    }
  };

  const expandCard = (e) => {
    const jobHdr = e.target;
    const arrow = e.target.nextElementSibling;
    const targetList = Array.from(arrow.closest(".resp-container").children)[1];

    if (!arrow.classList.contains("flipped")) {
      jobHdr.classList.add("blacked");
      arrow.classList.add("flipped");
      targetList.style.display = "flex";
      setTimeout(() => targetList.classList.add("lol"), 100);
    } else {
      arrow.classList.remove("flipped");
      jobHdr.classList.remove("blacked");
      targetList.style.display = "none";
      setTimeout(() => targetList.classList.remove("lol"), 100);
    }
  };

  return (
    <div className="application-form-container">
      {errorBooking ? (
        <ErrorWindow fields={{ handler: setErrorBooking, info: missing }} />
      ) : null}
      {requestSent ? (
        <SuccessWindow
          fields={{ handler: setRequest, errHandler: setErrorBooking }}
        />
      ) : null}
      <div className="job-description-container">
        <div className="resp-container">
          <div className="header-cont">
            <h2 onClick={expandCard} className="job-header">
              Job Responsibilities
            </h2>
            <FaArrowDown className="header-arrow" />
          </div>
          <ul className="responsibilites-list list">
            {jobResp.map((resp, id) => (
              <li key={id}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="resp-container">
          <div className="header-cont">
            <h2 onClick={expandCard} className="job-header">
              Job Requirements
            </h2>
            <FaArrowDown className="header-arrow" />
          </div>
          <ul className="responsibilites-list list">
            {jobReq.map((resp, id) => (
              <li key={id}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="resp-container">
          <div className="header-cont">
            <h2 onClick={expandCard} className="job-header">
              Benefits
            </h2>
            <FaArrowDown className="header-arrow" />
          </div>
          <ul className="responsibilites-list list">
            {jobBen.map((resp, id) => (
              <li key={id}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        autoComplete="off"
        className="job-form-container"
      >
        <label></label>
        <input
          value={`${name.toUpperCase()} DEPARTMENT`}
          id="position"
          name="position"
          className="application-input"
          type="text"
        />
        <input
          onChange={updateUserInfo}
          id="name"
          name="name"
          className="application-input"
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={updateUserInfo}
          name="email"
          id="email"
          className="application-input"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={updateUserInfo}
          name="phone"
          id="phone"
          className="application-input"
          type="number"
          placeholder="Phone Number"
        />
        <textarea
          onChange={updateUserInfo}
          name="comments"
          id="comments"
          className="user-notes"
          placeholder="Tell us something about yourself!"
        ></textarea>
        <div className="resume-container">
          <span className="resume-header">
            Have a Resume? Attach it <BsArrowRight />
          </span>
          <input
            name="resume-file"
            id="resume-file"
            className="resume"
            type="file"
          />
        </div>

        <button onClick={fieldsChecker} className="job-submit-btn">
          SEND APPLICATION
        </button>
      </form>
    </div>
  );
}
