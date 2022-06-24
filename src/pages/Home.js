import { NavLink } from "react-router-dom";
import "./page_styles/homepage.css";
const Home = () => {
  const pages = [
    {
      title: "Flower",
      path: "/flower",
    },
    {
      title: "Rocket",
      path: "/rocket",
    },
    {
      title: "Saturn",
      path: "/saturn",
    },
  ];
  return (
    <div className="homepage-wrapper ">
      <nav>
        <h1 className="app-title">Coloring Book </h1>
      </nav>
      <div className="content-container">
        <section className="content">
          {pages.map((page, index) => (
            <div key={index} className="single-item">
              <h1 className="single-item-title"> {page.title} </h1>
              <div className="img-container">
                <img src="" alt={page.title} />
              </div>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "royalblue",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
                to={page.path}
              >
                {" "}
                Start{" "}
              </NavLink>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
