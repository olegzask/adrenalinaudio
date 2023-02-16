import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BooleanContext } from "../../store";
import { FaPowerOff } from "react-icons/fa";
import { Footer } from "../footer/Footer";
import { HiMenuAlt3 } from "react-icons/hi";
import { Outlet } from "react-router";
import { PowerWall } from "../powerwall/PowerWall";
import MobileMenu from "./MobileMenu";
import { scrollToTop } from "../helperFunctions/helpers";
import "./navbar.styles.css";

export const Navbar = () => {
  const { clickedOn, path } = useContext(BooleanContext);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hideMenu = (e) => {
    const menu = document.getElementById("mobile");
    if (!menu.classList.contains("hide")) {
      menu.classList.add("hide");
    } else menu.classList.remove("hide");
  };

  const goToServices = (e) => {
    const servicesEl = document.getElementById("huevo");
    servicesEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  };

  return (
    <div className="navbar-container">
      {path === "/" ? <PowerWall /> : null}
      <div className={`navbar ${offset > 50 && "scrolled"}`}>
        <div className="navlinks-cont">
          <Link onClick={scrollToTop} to="/">
            <FaPowerOff className="navbar-logo" />
          </Link>
          <Link onClick={scrollToTop} className="nav-link" to="/about">
            About
          </Link>
          <Link onClick={goToServices} className="nav-link">
            Services
          </Link>
          {/* <Link onClick={scrollToTop} className="nav-link" to="/news">
            News
          </Link> */}
          <Link onClick={scrollToTop} className="nav-link" to="/careers">
            Careers
          </Link>
          <Link onClick={scrollToTop} className="nav-link" to="/contact">
            Contact
          </Link>
        </div>

        <div className="hamb-menu-container">
          <HiMenuAlt3 onClick={hideMenu} id="hamb-menu-icon" />
        </div>
        <MobileMenu />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};
