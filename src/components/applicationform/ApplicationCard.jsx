import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import "./applicationcard.styles.css";

export default function ApplicationCard({ opts }) {
  const { name, jobs } = opts;
  const [heh] = jobs;
  const { jobBen, jobReq, jobResp } = heh;

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const missingInfo = [];

  const updateUserInfo = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, [e.target.name]: value });
  };

  const sendApplication = (e) => {
    e.preventDefault();
    const valuesArr = Object.entries(userInfo);
    valuesArr.map((el) => {
      if (!el[1]) {
        missingInfo.push(el[0]);
      }
    });
    if (missingInfo.length < 1) {
      alert("SENT!");
      return;
    }
    if (missingInfo.length > 0)
      alert(
        `Missing info: ${missingInfo.map(
          (el) => el
        )}. Please double check and try again!`
      );
    return;
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
      <form autoComplete="off" className="job-form-container">
        <span className="apply-header">
          APPLYING FOR: {name ? name.toUpperCase() + " " + "POSITION" : null}
        </span>
        <input
          required
          onChange={updateUserInfo}
          name="name"
          className="application-input"
          type="text"
          placeholder="FULL NAME"
        />
        <input
          required
          onChange={updateUserInfo}
          name="email"
          className="application-input"
          type="email"
          placeholder="EMAIL"
        />
        <input
          required
          onChange={updateUserInfo}
          name="phone"
          className="application-input"
          type="number"
          placeholder="PHONE NUMBER"
        />
        <textarea
          required
          onChange={updateUserInfo}
          name="notes"
          className="user-notes"
          placeholder="Tell us something about yourself!"
        ></textarea>
        <div className="resume-container">
          <span className="resume-header">
            Have a Resume? Attach it <BsArrowRight />
          </span>
          <input id="resume-file" className="resume" type="file" />
        </div>

        <button onClick={sendApplication} className="job-submit-btn">
          SEND APPLICATION
        </button>
      </form>
    </div>
  );
}
