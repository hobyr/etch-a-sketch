const container = document.querySelector(".container");

for (let i = 0; i < 4; i++) {
  const row = document.createElement("div");
  row.classList.add("gridrow");
  for (let j = 0; j < 4; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
  container.appendChild(row);
}
