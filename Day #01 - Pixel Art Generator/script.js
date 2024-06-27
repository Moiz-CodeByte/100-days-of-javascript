let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let downloadBtn = document.getElementById("download-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let draw = false;
let erase = false;

const createGrid = () => {
    container.innerHTML = "";
    let count = 0;
    for (let i = 0; i < gridHeight.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        for (let j = 0; j < gridWidth.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);

            // Handle drawing and erasing
            col.addEventListener('mousedown', () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });

            col.addEventListener('mousemove', (e) => {
                if (draw) {
                    let element = document.elementFromPoint(e.clientX, e.clientY);
                    if (element && element.classList.contains('gridCol')) {
                        if (erase) {
                            element.style.backgroundColor = "transparent";
                        } else {
                            element.style.backgroundColor = colorButton.value;
                        }
                    }
                }
            });

            col.addEventListener('mouseup', () => {
                draw = false;
            });

            col.addEventListener('touchstart', () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });

            col.addEventListener('touchmove', (e) => {
                if (draw) {
                    let touch = e.touches[0];
                    let element = document.elementFromPoint(touch.clientX, touch.clientY);
                    if (element && element.classList.contains('gridCol')) {
                        if (erase) {
                            element.style.backgroundColor = "transparent";
                        } else {
                            element.style.backgroundColor = colorButton.value;
                        }
                    }
                }
            });

            col.addEventListener('touchend', () => {
                draw = false;
            });

            div.appendChild(col);
        }
        container.appendChild(div);
    }
};

const clearGrid = () => {
    container.innerHTML = "";
};

const downloadImage = () => {
    let grid = document.createElement('div');
    grid.className = 'grid-container';
    grid.style.display = 'inline-block';
    

    container.querySelectorAll('.gridRow').forEach(row => {
        let newRow = row.cloneNode(true);
        grid.appendChild(newRow);
    });

    // Temporarily remove grid lines
    let gridColumns = grid.querySelectorAll('.gridCol');
    gridColumns.forEach(col => {
        col.style.border = 'none';
    });

    document.body.appendChild(grid);

    html2canvas(grid, { useCORS: true }).then(canvas => {
        document.body.removeChild(grid);
        // Restore grid lines
        gridColumns.forEach(col => {
            col.style.border = '1px solid #ddd';
        });

        let link = document.createElement('a');
        link.download = 'pixel-art-moiz-codebyte.png';
        link.href = canvas.toDataURL();
        link.click();
    }).catch(error => {
        console.error('Error capturing the canvas:', error);
    });
};

gridButton.addEventListener("click", createGrid);
clearGridButton.addEventListener("click", clearGrid);

eraseBtn.addEventListener("click", () => {
    erase = true;
});

paintBtn.addEventListener("click", () => {
    erase = false;
});

gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 10 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 10 ? `0${gridHeight.value}` : gridHeight.value;
});

downloadBtn.addEventListener("click", downloadImage);

window.onload = () => {
    gridHeight.value = 0;
    gridWidth.value = 0;
};
