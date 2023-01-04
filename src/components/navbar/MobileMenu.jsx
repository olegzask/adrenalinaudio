import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { scrollToTop } from "../helperFunctions/helpers";
import "./mobileMenu.styles.css";

export default function MobileMenu() {
  const hideMenu = (e) => {
    const menu = document.getElementById("mobile");
    const closeBtn = document.getElementById("mobile-close");
    if (!menu.classList.contains("hide")) {
      menu.classList.add("hide");
    } else {
      menu.classList.remove("hide");
    }
    scrollToTop();
  };

  return (
    <div id="mobile" className="mobile-menu-container">
      <MdClose
        id="mobile-close"
        onClick={hideMenu}
        className="mobile-close-button"
      />

      <div className="mobile-link-container">
        <Link onClick={hideMenu} className="mobile-link" to="/about">
          About
        </Link>
        <Link onClick={hideMenu} className="mobile-link" to="/services">
          Services
        </Link>
        <Link onClick={hideMenu} className="mobile-link" to="/simulator">
          Simulator
        </Link>
        <Link onClick={hideMenu} className="mobile-link" to="/sales">
          Sales
        </Link>
        <Link onClick={hideMenu} className="mobile-link" to="/careers">
          Careers
        </Link>
        <Link onClick={hideMenu} className="mobile-link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="lower-nav">
        <a href="tel:17804409438" className="calus">
          <FiPhoneCall className="phone-icon" /> Call Us
        </a>
        <a
          href="https://www.google.com/maps/place/Adrenalin+Audio+%2F+Remote+Starters,+Window+Tint+and+Film+Protection/@53.4961639,-113.4827581,15z/data=!4m5!3m4!1s0x0:0x47bceeee593e223!8m2!3d53.4961639!4d-113.4827581?hl=en"
          className="calus"
          target="_blank"
        >
          <GoLocation className="phone-icon" /> Find Us
        </a>
      </div>
    </div>
  );
}
