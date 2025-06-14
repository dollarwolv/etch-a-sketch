var container = document.getElementById("container");
var button = document.getElementById("button");

// credit https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function renderGrid(numberOfSquares=16) {
    container.replaceChildren();
    for(let i = 0; i<numberOfSquares**2; i++) {

        // create block
        let sketchBlock = document.createElement("div");
        let opacity = 1;

        // add css styles
        sketchBlock.style.backgroundColor = "white";
        sketchBlock.style.width = `${960/numberOfSquares}px`;
        sketchBlock.style.height = `${960/numberOfSquares}px`;
        sketchBlock.style.border = "1px solid black";

        // add eventListener
        sketchBlock.addEventListener("mouseover", () => {
            sketchBlock.style.backgroundColor = getRandomColor();
            opacity -= 0.1;
            sketchBlock.style.opacity = opacity;
        })

        container.appendChild(sketchBlock);
    }
}

button.addEventListener("click", () => {
    let value = prompt("Please input how many pixels you want on the top of the grid")
    
    renderGrid(value);
})


renderGrid()