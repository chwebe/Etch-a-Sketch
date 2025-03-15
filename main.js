/**
 * Creates a specified number of grid row divs and appends them to a parent element.
 * @param {number} containerCount - The number of grid row divs to create.
 * @param {string} parentSelector - The CSS selector for the parent element.
 */

function createBlockContainers(containerCount, parentSelector) {
    const parentDiv = document.querySelector(parentSelector);

    if (!parentDiv) {
        console.error(`Parent element with selector "${parentSelector}" not found.`);
        return;
    }

    for (let i = 0; i < containerCount; i++) {
        const newCont = document.createElement('div');
        newCont.className = 'grid-row';
        parentDiv.appendChild(newCont);
    }
}

function createBlocksInContainers(blockCount, parentSelector) {
    const allBlockContainers = document.querySelectorAll('.grid-row');

    allBlockContainers.forEach(container => {
        for (let i = 0; i < blockCount; i++) {
            const blockDiv = document.createElement('div');
            blockDiv.className = 'grid-cell';
            container.appendChild(blockDiv);
        }
    });
}

function RemoveDiv (divClassName) {
    const divsSelection = document.querySelectorAll(divClassName);
    for (let i = 0; i < divsSelection.length; i++) {
        divsSelection.item(i).remove(); 
    }
}

function ResetGrid() {
    RemoveDiv(".grid-row")
    RemoveDiv(".grid-cell")
}

function addHoverEffect() {
    let hoverBlocks = document.querySelectorAll('.grid-cell');
    hoverBlocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            if (rgbModeActive) {
                block.style.backgroundColor = getRandomColor();
            } else {
                block.style.backgroundColor = ColorPicker.value;
            }
        });
    });
}

const ColorPicker = document.querySelector('.pen-color');
ColorPicker.addEventListener('input', () => {
    const color = ColorPicker.value;
    const blocks = document.querySelectorAll('.grid-cell');
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(gridNumber) {
    createBlockContainers(gridNumber, '.grid-container');
    createBlocksInContainers(gridNumber, '.grid-row');
    addHoverEffect();
}

function getSliderValue() {
    return parseInt(document.getElementById('grid-size-slider').value);
}

function UpdateSliderValue() {
    const sliderValue = getSliderValue();
    const gridSizeDisplay = document.querySelectorAll('.grid-size-display');
    gridSizeDisplay.forEach(display => {
        display.textContent = `${sliderValue} x ${sliderValue}`;
    });
}

// RGB mode state
let rgbModeActive = false;

createGrid(16);

const slider = document.getElementById('grid-size-slider')
slider.addEventListener('input', () => {
    ResetGrid();
    createGrid(getSliderValue());
    UpdateSliderValue();
});

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
    ResetGrid();
    createGrid(getSliderValue());
    UpdateSliderValue();
});

// RGB Mode Toggle
const rgbButton = document.querySelector('.rgb-button');
rgbButton.addEventListener('click', () => {
    rgbModeActive = !rgbModeActive;
    rgbButton.setAttribute('aria-pressed', rgbModeActive);
    
    // Update visual indicator
    if (rgbModeActive) {
        rgbButton.classList.add('active');
    } else {
        rgbButton.classList.remove('active');
    }
});
