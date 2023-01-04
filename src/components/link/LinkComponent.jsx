import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import { BsArrowRight } from "react-icons/bs";

const LinkComponent = ({ opts }) => {
  const { name, linkTo, clName } = opts;

  return (
    <Link onClick={scrollToTop} className="button-link" to={`/${linkTo}`}>
      <div className={`button-link-container ${clName}`}>
        {name}
        <BsArrowRight className={`link-arrow ${clName}`} />
      </div>
    </Link>
  );
};

export default LinkComponent;
