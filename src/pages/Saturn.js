import { SaturnSVG, ColorPallete } from "../components";
import "./../app.css";
const Rocket = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <section className="title-container">
          <h1 className="title">Saturn </h1>
        </section>
        <section className="svg-container">
          <SaturnSVG />
        </section>
        <section className="pallete-container">
          <ColorPallete />
        </section>
      </div>
    </div>
  );
};

export default Rocket;
