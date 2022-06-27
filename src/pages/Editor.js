import React, { useEffect, useState, useRef } from "react";
import { ColorPallete } from "../components";
import "./../pages/styles/svg_pages.css";
const Rocket = ({ SVGComponent, title }) => {
  const [element, setElement] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const element = <SVGComponent ref={ref} />;

    setElement(element);
  }, [SVGComponent]);

  // useEffect(() => {
  //   console.log(ref);
  // }, [ref.current]);

  return (
    <div className="wrapper">
      <div className="container">
        <section className="title-container">
          <h1 className="title">{title}</h1>
        </section>
        <section className="svg-container">{element}</section>
        <section className="pallete-container">
          <ColorPallete />
        </section>
      </div>
    </div>
  );
};

export default Rocket;
