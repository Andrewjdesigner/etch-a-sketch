createGrid();

const pixels = document.querySelectorAll(".pixel");

pixels.forEach(pixel => pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "aquamarine";
}));

function createGrid() {

    const gridContainer = document.querySelector(".container");
    
    for (i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");
        gridContainer.appendChild(gridRow);
    }

    const gridRows = document.querySelectorAll(".row");
    gridRows.forEach((row) => {
        for(j = 0; j < 16; j++) {
            const gridPosition = document.createElement("div");
            gridPosition.classList.add("pixel");
            row.appendChild(gridPosition);
        }
    });
}