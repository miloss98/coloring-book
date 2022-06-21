import { useState } from "react";
import ColorPallete from "./components/ColorPallete";
import Flower from "./components/Flower";
import "./app.css";
function App() {
  const [colors, setColors] = useState(Array(22).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const fillColors = (index) => {
    let newFillColors = colors.slice(0);
    newFillColors[index] = currentColor;
    setColors(newFillColors);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <section className="title-container">
          <h1 className="title">Coloring Book </h1>
        </section>
        <section className="svg-container">
          <Flower colors={colors} fill={fillColors} currentColor />
        </section>
        <section className="pallete-container">
          <ColorPallete
            currentColor={currentColor}
            changeColor={setCurrentColor}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
