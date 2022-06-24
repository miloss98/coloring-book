import { Home, Flower, Rocket, Saturn } from "./pages/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flower" element={<Flower />} />
      <Route path="/rocket" element={<Rocket />} />
      <Route path="/saturn" element={<Saturn />} />
    </Routes>
  );
}

export default App;
