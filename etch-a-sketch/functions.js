const grid = document.querySelector('.container');
const gridSize = document.querySelector('#grid-size');
const colorPicker = document.querySelector('.color-picker');
const rainbowBtn = document.querySelector('.rainbow');
const sizeLabel = document.querySelector('.size');
const eraser = document.querySelector('.eraser');
let color = '#000';
let size = gridSize.value;
let mouseDown = false;

window.onload = function() {
    createGrid(size, size);
}

colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
});

gridSize.addEventListener('input', () => {
    size = gridSize.value;
    sizeLabel.textContent = `${size} x ${size}`
    createGrid(size, size);

});

rainbowBtn.addEventListener('click', () => {

    color = `rgb(${getRandomNum(0,300)}, ${getRandomNum(0,300)}, ${getRandomNum(0,300)})`
    colorPicker.value = color;
});

eraser.addEventListener('click', () => {
    color = '#fff';
})

function createGrid(rows, columns) {
    grid.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        grid.appendChild(rowDiv);
        for (let j = 0; j < columns; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            rowDiv.appendChild(squareDiv);

        }

    }

    paint();
}

function paint() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            mouseDown = true;
            square.style.backgroundColor = color;

        });

        square.addEventListener('mouseup', () => {
            mouseDown = false;

        });
    });
}

function getRandomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}