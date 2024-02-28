const grid = document.querySelector(".grid-container");
const slide = document.querySelector(".slider");
const span = document.querySelector("span");
const reset = document.querySelector(".reset");

function makeGridLayout() {
  slide.oninput = () => {
    const size = slide.value;
    const gridWidth = parseInt(getComputedStyle(grid).width);
    removeChildNode();
    for (let i = 1; i <= size * size; i++) {
      grid.appendChild(makeGrid(gridWidth / size));
    }
    span.innerHTML = size;
    console.log(size);
    paintSketch();
  };
}

function makeGrid(divSize) {
  const divChild = document.createElement("div");
  divChild.classList.add("grid-item");
  divChild.style.width = divChild.style.height = `${divSize}px`;
  divChild.setAttribute("value", 0);
  return divChild;
}

function removeChildNode() {
  while (grid.hasChildNodes()) {
    console.log();
    grid.removeChild(grid.firstChild);
  }
}

function paintSketch() {
  const gridChilds = document.querySelectorAll(".grid-item");
  gridChilds.forEach((gridChild) => {
    gridChild.addEventListener("mouseover", () => {
      let value = gridChild.getAttribute("value");
      if (value < 10) {
        changeOpacity(gridChild, value);
      }
      gridChild.style.backgroundColor = randColor();
    });
  });
}

function changeOpacity(gridChild, value) {
  value++;
  gridChild.style.opacity = `${value * 10}%`;
  gridChild.setAttribute("value", value);
}

function randColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}

reset.addEventListener("click", () => {
  removeChildNode();
  slide.value = "1";
  span.innerHTML = 1;
});

makeGridLayout();
