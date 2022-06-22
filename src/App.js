import { useState, useEffect } from "react";
import ColorPallete from "./components/ColorPallete";
import Flower from "./components/Flower";
import "./app.css";
function App() {
  //colors
  const initialArray = Array(22);
  const [colors, setColors] = useState(initialArray.fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const fillColors = (index) => {
    let newFillColors = colors.slice(0);
    newFillColors[index] = currentColor;
    setColors(newFillColors);
  };

  //reset
  const reset = () => {
    setColors(initialArray.fill("white"));
  };

  //heights
  const [heights] = useState({
    headerHeight: 80,
    palleteHeight: 140,
    border: 2,
  });
  const heightsSum =
    heights.headerHeight + heights.palleteHeight + heights.border;

  //scaling
  const [dimensions, setDimensions] = useState({
    height: Math.min(window.innerHeight) - heightsSum,
    width: Math.min(window.innerWidth),
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: Math.min(window.innerHeight) - heightsSum,
        width: Math.min(window.innerWidth),
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="wrapper">
      <div className="container">
        <section className="title-container">
          <h1 className="title">Coloring Book </h1>
        </section>
        <section className="svg-container">
          <Flower colors={colors} fill={fillColors} dimensions={dimensions} />
        </section>
        <section className="pallete-container">
          <ColorPallete
            currentColor={currentColor}
            changeColor={setCurrentColor}
            reset={reset}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
