const square =
  document.getElementById ("square");

square.addEventListener (
  "pointerover",
  () =>
    (square.style.backgroundColor = "red")
);

square.addEventListener (
  "pointerout",
  () =>
    (square.style.backgroundColor = "blue")
);
