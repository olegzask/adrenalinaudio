import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooleanContext } from "../../store";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { scrollToTop } from "../helperFunctions/helpers";

import "./footer.styles.css";

export const Footer = () => {
  const { clickedOn } = useContext(BooleanContext);

  return (
    <div
      id="footer"
      className={`footer-container ${clickedOn ? "visible" : "hidden"}`}
    >
      <div className="footer-left-side">
        <span className="direct-contact-container">
          <span className="have-question">Have a Question? </span>
          <span className="ask-us-anything">Ask us anything.</span>
        </span>
        <a className="direct-link" href="tel:17804409438">
          <FiPhoneCall className="phone-icon-footer" /> 1.780.440.9438
        </a>
        <a className="direct-link" href="mailto:info@adrenalinaudio.com">
          <HiOutlineMail className="phone-icon-footer" />{" "}
          info@adrenalinaudio.com
        </a>
        <a
          href="https://www.google.com/maps/place/Adrenalin+Audio+%2F+Remote+Starters,+Window+Tint+and+Film+Protection/@53.4961639,-113.4827581,15z/data=!4m5!3m4!1s0x0:0x47bceeee593e223!8m2!3d53.4961639!4d-113.4827581?hl=en"
          className="direct-link"
          target="_blank"
        >
          <GoLocation className="phone-icon-footer" /> Get Directions
        </a>
      </div>

      <div className="footer-links-container">
        <Link onClick={scrollToTop} className="footer-link" to="/about">
          About
        </Link>
        <Link onClick={scrollToTop} className="footer-link" to="/services">
          Services
        </Link>
        <Link onClick={scrollToTop} className="footer-link" to="/simulator">
          Simulator
        </Link>
        <Link onClick={scrollToTop} className="footer-link" to="/sales">
          Sales
        </Link>
        <Link onClick={scrollToTop} className="footer-link" to="/careers">
          Careers
        </Link>
        <Link onClick={scrollToTop} className="footer-link" to="/contact">
          Contact
        </Link>
      </div>

      <div className="footer-bottom">
        <div className="footer-address">
          <a
            target="_blank"
            className="footer-address"
            href="https://www.google.com/maps/place/Adrenalin+Audio+%2F+Remote+Starters,+Window+Tint+and+Film+Protection/@53.4961639,-113.4827581,15z/data=!4m5!3m4!1s0x0:0x47bceeee593e223!8m2!3d53.4961639!4d-113.4827581?hl=en"
          >
            <b>HQ </b>- 9752 60 Ave NW | Edmonton | Alberta | Canada | T6E 0C5
          </a>
        </div>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/adrenalinaudio/" target="_blank">
            <ImFacebook className="social-icon" />
          </a>
          <a
            href="https://instagram.com/adrenalin_audio?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <BsInstagram className="social-icon" />
          </a>
        </div>
        <h3 className="oleg">Website by Oleg Zaskovets © 2022</h3>
      </div>
    </div>
  );
};
