const gridContainer = document.getElementById('grid-container');
const scoreContainer = document.getElementById('score');
let score = 0;
let grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

function createGrid() {
    gridContainer.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            if (grid[i][j] !== 0) {
                cell.textContent = grid[i][j];
                cell.setAttribute('data-value', grid[i][j]);
            }
            gridContainer.appendChild(cell);
        }
    }
}

function generateRandom() {
    let emptyCells = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                emptyCells.push({ x: i, y: j });
            }
        }
    }
    if (emptyCells.length > 0) {
        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[randomCell.x][randomCell.y] = Math.random() < 0.9 ? 2 : 4;
    }
}

function updateScore(points) {
    score += points;
    scoreContainer.textContent = `Score: ${score}`;
}

function moveLeft() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        let row = grid[i].filter(val => val);
        for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
                row[j] *= 2;
                updateScore(row[j]);
                row.splice(j + 1, 1);
            }
        }
        while (row.length < 4) {
            row.push(0);
        }
        if (grid[i].toString() !== row.toString()) {
            moved = true;
            grid[i] = row;
        }
    }
    return moved;
}

function rotateGrid() {
    let newGrid = grid[0].map((_, index) => grid.map(row => row[index]).reverse());
    grid = newGrid;
}

function moveRight() {
    rotateGrid();
    rotateGrid();
    let moved = moveLeft();
    rotateGrid();
    rotateGrid();
    return moved;
}

function moveUp() {
    rotateGrid();
    rotateGrid();
    rotateGrid();
    let moved = moveLeft();
    rotateGrid();
    return moved;
}

function moveDown() {
    rotateGrid();
    let moved = moveLeft();
    rotateGrid();
    rotateGrid();
    rotateGrid();
    return moved;
}

function isGameOver() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) return false;
            if (j < 3 && grid[i][j] === grid[i][j + 1]) return false;
            if (i < 3 && grid[i][j] === grid[i + 1][j]) return false;
        }
    }
    return true;
}

function handleMove(keyCode) {
    let moved = false;
    if (keyCode === 37) moved = moveLeft();
    if (keyCode === 38) moved = moveUp();
    if (keyCode === 39) moved = moveRight();
    if (keyCode === 40) moved = moveDown();
    if (moved) {
        generateRandom();
        createGrid();
        if (isGameOver()) {
            alert('Game Over!');
        }
    }
}

document.addEventListener('keydown', (e) => {
    handleMove(e.keyCode);
});

// Add touch event listeners for mobile support
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 20) { // Swipe threshold
        if (absDx > absDy) {
            if (dx > 0) {
                handleMove(39); // Swipe right
            } else {
                handleMove(37); // Swipe left
            }
        } else {
            if (dy > 0) {
                handleMove(40); // Swipe down
            } else {
                handleMove(38); // Swipe up
            }
        }
    }
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchEnd, false);

function initGame() {
    generateRandom();
    generateRandom();
    createGrid();
}

initGame();
