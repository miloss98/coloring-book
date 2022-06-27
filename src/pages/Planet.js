import { PlanetSVG, ColorPallete } from "../components";
import "./../pages/styles/svg_pages.css";
const Planet = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <section className="title-container">
          <h1 className="title">Saturn </h1>
        </section>
        <section className="svg-container">
          <PlanetSVG />
        </section>
        <section className="pallete-container">
          <ColorPallete />
        </section>
      </div>
    </div>
  );
};

export default Planet;
