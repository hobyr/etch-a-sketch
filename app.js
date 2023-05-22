function generateGrid(squareSize) {
  const container = document.querySelector(".container");
  for (let i = 0; i < squareSize; i++) {
    const row = document.createElement("div");
    row.classList.add("gridrow");
    for (let j = 0; j < squareSize; j++) {
      const square = document.createElement("div");
      square.addEventListener("mouseenter", function() {
        this.classList.add("square-focus");
      });
      square.addEventListener("mouseleave", function() {
        this.classList.remove("square-focus");
        this.classList.add("square-trail");
      })
      square.classList.add("square");
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function deleteCurrentGrid() {
  const container = document.querySelector(".container");
  const rows = document.querySelectorAll(".gridrow");
  rows.forEach(row => container.removeChild(row));
}

const setGridSize = function () {
  let gridSize = parseInt(prompt("Tell us the grid size you want (max 100)?"));
  while (gridSize > 100) {
    gridSize = parseInt(prompt("Tell us the grid size you want (max 100)?"));
  }
  console.log(gridSize);
  deleteCurrentGrid();
  generateGrid(gridSize);
}

function resetGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.classList.remove("square-trail");
  });
}

const button = document.querySelector("#grid-size-setter");
button.addEventListener("click", setGridSize);
const resetter = document.querySelector("#reset-grid");
resetter.addEventListener("click", resetGrid);
