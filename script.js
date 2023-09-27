createGrid(16);

const sizeButton = document.querySelector("#grid-size");
sizeButton.addEventListener("click", chooseSize);

function createGrid(size) {

    const gridContainer = document.querySelector(".container");
    
    for (i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");
        gridContainer.appendChild(gridRow);
    }

    const gridRows = document.querySelectorAll(".row");
    gridRows.forEach((row) => {
        for(j = 0; j < size; j++) {
            const gridPosition = document.createElement("div");
            gridPosition.classList.add("pixel");
            row.appendChild(gridPosition);
        }
    });

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "darkorchid";
    }));
}

function chooseSize() {
    let sizeChoice = prompt("Select grid size from 10 to 100");
    if (sizeChoice != null) {
        choiceNum = parseFloat(sizeChoice);
        if (isNaN(choiceNum)) {
            alert("Please enter a number");
        } else if (choiceNum < 10 || choiceNum > 100) {
            alert("Please enter a number between 10 and 100");
        } else {
            const gridContainer = document.querySelector(".container");
            gridContainer.innerHTML = "";
            createGrid(sizeChoice);
        }
    }
}