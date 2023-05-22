const container = document.querySelector(".container");
const squareSize = 16;

for (let i = 0; i < squareSize; i++) {
  const row = document.createElement("div");
  row.classList.add("gridrow");
  for (let j = 0; j < squareSize; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
  container.appendChild(row);
}
