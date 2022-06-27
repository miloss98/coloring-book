import { Home, Editor } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import { FlowerSVG, PlanetSVG, RocketSVG } from "./components";

const documents = [
  { component: FlowerSVG, title: "Flower", path: "/flower" },
  { component: RocketSVG, title: "Rocket", path: "/rocket" },
  { component: PlanetSVG, title: "Planet", path: "/planet" },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {documents.map((d, index) => (
        <Route
          key={index}
          path={d.path}
          element={<Editor SVGComponent={d.component} title={d.title} />}
        />
      ))}
    </Routes>
  );
}

export default App;
