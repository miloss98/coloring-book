import "../app.css";
const ColorPallete = (props) => {
  const { currentColor, changeColor, reset } = props;

  const colors = [
    "#FF0000",
    "#ffa500",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FF00FF",
    "#800080",
    "#FFFFFF",
    "#000000",
    "#454545",
    "#999999",
  ];

  return (
    <div className="color-palette">
      {colors.map((color, id) => {
        const activeClass = currentColor === color ? "single-color-active" : "";
        return (
          <div key={id} onClick={() => changeColor(color)}>
            <div
              className={`single-color ${activeClass}`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        );
      })}
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ColorPallete;
