import React, { useState } from "react";
import { RxReset } from "react-icons/rx";
import { jobs } from "../../components/applicationform/joblist";
import ApplicationCard from "../../components/applicationform/ApplicationCard";
import "./careers.styles.css";

export default function Careers() {
  const [department, setDepartment] = useState("");
  const [activeDep, setActiveDep] = useState("");
  const [job, setJob] = useState();

  const resetDepartment = () => {
    setDepartment("");

    const allBtns = Array.from(document.getElementsByClassName("btn-dep"));
    allBtns.map((el) => {
      el.classList.remove("static");
      el.classList.remove("selected");
      el.style.display = "block";
    });
  };

  const chooseDepartment = (e) => {
    const clickedBtn = e.target.id;
    setDepartment(clickedBtn);
    const propJob = jobs.filter((el) => el.jobName === clickedBtn);
    setJob(propJob);
    const allBtns = Array.from(document.getElementsByClassName("btn-dep"));
    allBtns.map((btn) => {
      btn.classList.remove("selected");
      btn.classList.remove("inactive");
    });
    e.target.classList.add("selected");
    e.target.classList.add("static");

    allBtns.filter((btn) =>
      btn.id !== clickedBtn ? (btn.style.display = "none") : null
    );
  };

  return (
    <div className="careers-container">
      <h2 className="careers-header">
        Adrenalin Audio is always looking for good people to join our team!
      </h2>
      <h3 className="careers-header-two">
        Please, choose a department to start your application.
      </h3>
      <div className="dep-btn-container">
        <button id="12 volt" onClick={chooseDepartment} className="btn-dep">
          12 VOLT DEPARTMENT
        </button>
        <button
          id="automotive film"
          onClick={chooseDepartment}
          className="btn-dep"
        >
          AUTOMOTIVE FILM DEPARTMENT
        </button>
        {department ? (
          <RxReset id="resetBtn" onClick={resetDepartment} />
        ) : null}
      </div>

      {department ? (
        <ApplicationCard opts={{ name: department, jobs: job }} />
      ) : null}
    </div>
  );
}
