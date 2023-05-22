const container = document.querySelector(".container");
const squareSize = 16;

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
