import { NavLink } from "react-router-dom";
import "./styles/homepage.css";
import { flower, rocket, planet } from "./../assets/index";
const Home = () => {
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
  ];
  return (
    <div className="homepage-wrapper ">
      <nav>
        <h1 className="app-title">Coloring Book </h1>
      </nav>
      <div className="content-container">
        <section className="content">
          {pages.map((item, index) => (
            <div key={index} className="single-item">
              <h1 className="single-item-title"> {item.title} </h1>
              <div className="img-container">
                <img className="images" src={item.image} alt={item.title} />
              </div>
              <NavLink className="link-styles" to={item.path}>
                Start
              </NavLink>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
