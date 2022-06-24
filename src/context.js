import React, { useState, useEffect } from "react";

const SvgContext = React.createContext();

const SvgProvider = ({ children }) => {
  //colors
  const initialArray = Array(22);
  const [colors, setColors] = useState(initialArray.fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const fill = (index) => {
    let newFillColors = colors.slice(0);
    newFillColors[index] = currentColor;
    setColors(newFillColors);
  };
  //colors array
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
    setColors(initialArray.fill("white"));
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

  return (
    <SvgContext.Provider
      value={{
        colors,
        setColors,
        currentColor,
        setCurrentColor,
        fill,
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
