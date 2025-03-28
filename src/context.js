import React, { useState, useEffect } from "react";
import { FlowerSVG, PlanetSVG, RocketSVG, BurgerSVG } from "./components/index";
import { flower, rocket, planet, burger } from "./assets/index";
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
    const svg = document.querySelectorAll("path");
    svg.forEach(function (e) {
      if (e.dataset["ignore"]) return;
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
    const svgPath = document.querySelectorAll("path");
    svgPath.forEach(function (e) {
      if (e.fill === "black") return;
      e.addEventListener("click", function () {
        console.log(e);
        if (e.dataset["ignore"]) return;
        e.setAttribute("fill", currentColor);
      });
    });
  });

  //list of svgs
  const documents = [
    { component: FlowerSVG, title: "Flower", path: "/flower" },
    { component: RocketSVG, title: "Rocket", path: "/rocket" },
    { component: PlanetSVG, title: "Planet", path: "/planet" },
    { component: BurgerSVG, title: "Burger", path: "/burger" },
  ];

  //pages data
  const pages = [
    {
      title: "Flower",
      path: "/flower",
      image: flower,
    },
    {
      title: "Rocket",
      path: "/rocket",
      image: rocket,
    },
    {
      title: "Planet",
      path: "/planet",
      image: planet,
    },
    {
      title: "Burger",
      path: "/burger",
      image: burger,
    },
  ];
  return (
    <SvgContext.Provider
      value={{
        currentColor,
        setCurrentColor,
        reset,
        dimensions,
        colorsArray,
        documents,
        pages,
      }}
    >
      {children}
    </SvgContext.Provider>
  );
};

export { SvgContext, SvgProvider };
