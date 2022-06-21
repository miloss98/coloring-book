import "../app.css";
const ColorPallete = (props) => {
  const { currentColor, changeColor } = props;

  const colors = [
    "#FF0000",
    "#ffa500",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FFD700",
    "#FFFF00",
    "#FF00FF",
    "#800080",
    "#FFFFFF",
    "#000000",
    "#454545",
    "#999999",
  ];

  return (
    <div className="color-palette">
      {colors.map((color) => {
        const activeClass = currentColor === color ? "single-color-active" : "";
        return (
          <div onClick={() => changeColor(color)}>
            <div
              className={`single-color ${activeClass}`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorPallete;
