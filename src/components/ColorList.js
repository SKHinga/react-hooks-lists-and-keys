import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorItem = colors.map((color)=> <li key={color} style={{color:color}}>{color}</li>)

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorItem}
      </ol>
    </div>
  );
}

export default ColorList;
