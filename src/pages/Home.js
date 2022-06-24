import { NavLink } from "react-router-dom";
import { Flower, Rocket, Saturn } from "./index";
import "./page_styles/homepage.css";
const Home = () => {
  return (
    <div className="homepage-wrapper ">
      <nav>
        <h1 className="app-title">Coloring Book </h1>
      </nav>
      <div className="content-container">
        <div>
          <button>
            <NavLink to="/flower" element={<Flower />}>
              Flower
            </NavLink>
          </button>
          <button>
            <NavLink to="/rocket" element={<Rocket />}>
              Rocket
            </NavLink>
          </button>
          <button>
            <NavLink to="/saturn" element={<Saturn />}>
              Saturn
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
