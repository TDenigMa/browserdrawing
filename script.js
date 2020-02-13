const grid = document.querySelector("#grid");
const cell = document.getElementsByClassName("cell");
const reset = document.querySelector(".reset");
const rainbow = document.querySelector(".rainbow");

function genDivs (divCount) {
    let divSize = 100 / divCount;
    let divTotal = divCount * divCount;
    for (let i = 0; i < divTotal; i++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.style.width = divSize + "%";
        div.style.flexGrow = 1;
        grid.appendChild(div);
    }
}

function clearGrid (grid) {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
}

function colorBlack () {
    for (let i=0; i < cell.length; i++) {
        cell[i].addEventListener("mouseenter", () => {
            cell[i].style.backgroundColor = "black";
        }), false
    }
}

function colorRainbow () {
    for (let i=0; i < cell.length; i++) {
        cell[i].addEventListener("mouseenter", () => {
            cell[i].style.backgroundColor = getRandomColor();
        }), false
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  genDivs(16);
  colorBlack();

reset.addEventListener("click", () => {
    let divCount = prompt("Please enter the number of the grid size you want. Max is 256x256. Ex: 64 gives you a 64x64 grid.");
    while (isNaN(divCount) || divCount == 0 || divCount > 256) {
        alert("Please enter a valid number bigger than 0.")
        divCount = prompt("Please enter the number of the grid size you want. Max is 256x256. Ex: 64 gives you a 64x64 grid.");
    }
    clearGrid(grid);
    genDivs(divCount);
    colorBlack();
});

rainbow.addEventListener("click", () => {
    let divCount = prompt("Please enter the number of the grid size you want. Max is 256x256. Ex: 64 gives you a 64x64 grid.");
    while (isNaN(divCount) || divCount == 0 || divCount > 256) {
        alert("Please enter a valid number bigger than 0.")
        divCount = prompt("Please enter the number of the grid size you want. Max is 256x256. Ex: 64 gives you a 64x64 grid.");
    }
    clearGrid(grid);
    genDivs(divCount);
    colorRainbow();
});