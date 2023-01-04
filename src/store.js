import React, { createContext, useState, useEffect } from "react";

const BooleanContext = createContext();

const BooleanProvider = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);
  const [clickedOn, setClickedOn] = useState(path === "/" ? false : true);
  const toggleBoolean = () => {
    setClickedOn((prevBooleanValue) => !prevBooleanValue);
  };

  const changePath = () => {
    setPath(window.location.pathname);
  };

  return (
    <BooleanContext.Provider
      value={{ clickedOn, toggleBoolean, path, changePath }}
    >
      {children}
    </BooleanContext.Provider>
  );
};

export { BooleanContext, BooleanProvider };
