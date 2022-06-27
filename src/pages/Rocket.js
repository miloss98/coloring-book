import { RocketSVG, ColorPallete } from "../components";
import "./../pages/styles/svg_pages.css";
const Rocket = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <section className="title-container">
          <h1 className="title">Rocket </h1>
        </section>
        <section className="svg-container">
          <RocketSVG />
        </section>
        <section className="pallete-container">
          <ColorPallete />
        </section>
      </div>
    </div>
  );
};

export default Rocket;
