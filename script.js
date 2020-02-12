const grid = document.querySelector("#grid");
const cell = document.getElementsByClassName("cell");
const reset = document.querySelector(".reset");

function genDivs (divCount) {
    let divSize = 100 / divCount;
    let divTotal = divCount * divCount;
    for (let i = 0; i < divTotal; i++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        //div.textContent = i+1;
        div.style.width = divSize + "%";
        div.style.flexGrow = 1;
        grid.appendChild(div);
    }
}

function colorBlack () {
    for (let i=0; i < cell.length; i++) {
        cell[i].addEventListener("mouseenter", () => {
            cell[i].style.backgroundColor = "black";
        }), false
    }
}

genDivs(16);
colorBlack();

function clearGrid (grid) {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
}

reset.addEventListener("click", () => {
    let divCount = prompt("Please enter the number of the grid size you want. Ex: 64 gives you a 64x64 grid.");
    while (isNaN(divCount) || divCount == 0) {
        alert("Please enter a valid number bigger than 0.")
        divCount = prompt("Please enter the number of the grid size you want. Ex: 64 gives you a 64x64 grid.");
    }
    clearGrid(grid);
    genDivs(divCount);
    colorBlack();
});