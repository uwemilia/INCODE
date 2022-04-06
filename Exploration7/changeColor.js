{
  /* 
<div id="blue">BLUE</div>
<div id="red">RED</div>
<div id="yellow">YELLOW</div>
<div id="green">GREEN</div>
<div id="black">BLACK</div>
<div id="square"></div>
 */
}

const blueDiv =
  document.getElementById ("blue");
const redDiv =
  document.getElementById ("red");
const yellowDiv =
  document.getElementById ("yellow");
const greenDiv =
  document.getElementById ("green");
const blackDiv =
  document.getElementById ("black");
const squ =
  document.getElementById ("square");

blueDiv.addEventListener (
  "pointerover",
  () => (squ.style.backgroundColor = "blue")
);
redDiv.addEventListener (
  "pointerover",
  () => (squ.style.backgroundColor = "red")
);
yellowDiv.addEventListener (
  "pointerover",
  () => (squ.style.backgroundColor = "yellow")
);
greenDiv.addEventListener (
  "pointerover",
  () => (squ.style.backgroundColor = "green")
);
blackDiv.addEventListener (
  "pointerover",
  () => (squ.style.backgroundColor = "black")
);
