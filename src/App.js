import Clown from "./components/Clown";
import "./app.css";
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <article className="title-div">
          <h1 className="title">Coloring Book </h1>
        </article>
        <section className="img-container">
          <Clown />
        </section>
      </div>
    </div>
  );
}

export default App;
