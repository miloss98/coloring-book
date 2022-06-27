import { FlowerSVG, ColorPallete } from "../components";
import "./../pages/styles/svg_pages.css";
const Rocket = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <section className="title-container">
          <h1 className="title">Flower </h1>
        </section>
        <section className="svg-container">
          <FlowerSVG />
        </section>
        <section className="pallete-container">
          <ColorPallete />
        </section>
      </div>
    </div>
  );
};

export default Rocket;
