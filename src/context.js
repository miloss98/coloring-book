import React, { useState, useEffect } from "react";

const SvgContext = React.createContext();

const SvgProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("blue");

  const colorsArray = [
    "#FF0000",
    "#ffa500",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FF00FF",
    "#800080",
    "#FFFFFF",
    "#000000",
    "#454545",
    "#999999",
  ];
  //reset
  const reset = () => {
    const test = document.querySelectorAll("g > path");
    test.forEach(function (e) {
      e.setAttribute("fill", "white");
    });
  };

  //heights
  const [heights] = useState({
    headerHeight: 80,
    palleteHeight: 140,
    borders: 10,
  });
  const heightsSum =
    heights.headerHeight + heights.palleteHeight + heights.borders;
  const widths = 30;

  //scaling
  const [dimensions, setDimensions] = useState({
    height: Math.min(window.innerHeight) - heightsSum,
    width: Math.min(window.innerWidth) - widths,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: Math.min(window.innerHeight) - heightsSum,
        width: Math.min(window.innerWidth) - widths,
      });
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  //coloring
  useEffect(() => {
    const test = document.querySelectorAll("g > path");
    console.log(test);
    test.forEach(function (e) {
      e.addEventListener("click", function () {
        e.setAttribute("fill", currentColor);
      });
    });
  });

  return (
    <SvgContext.Provider
      value={{
        currentColor,
        setCurrentColor,
        reset,
        dimensions,
        colorsArray,
      }}
    >
      {children}
    </SvgContext.Provider>
  );
};

export { SvgContext, SvgProvider };
