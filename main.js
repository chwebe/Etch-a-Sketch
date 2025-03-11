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
    const divsSelection = document.getElementsByClassName(divClassName);
    for (let i = 0; i < divsSelection; i++) {
        divsSelection[i].remove(); 
    }
}
RemoveDiv("main-container")
function resetGrid () {

}

createBlockContainers(16, '.grid-container');
createBlocksInContainers(16, '.grid-row');

const hoverBlocks = document.querySelectorAll('.grid-cell');

hoverBlocks.forEach(block => {
    block.addEventListener('mouseover', () => {
        block.style.backgroundColor = 'black';
    });
});


const slider = document.getElementById('grid-size-slider')
slider.addEventListener('input', () => {
    let sliderValue = parseInt(slider.value)
    switch(sliderValue) {
        case 0:
            gridRowSize = 4;
            gridcellSize = 4;
            break;
        case 1:
            gridRowSize = 8;
            gridcellSize = 8;
            break;
        case 2:
            gridRowSize = 12;
            gridcellSize = 12;
            break;
        case 3:
            gridRowSize = 16;
            gridcellSize = 16;
            break;
        case 4:
            gridRowSize = 24;
            gridcellSize = 24;
            break;
        default:
            gridRowSize = 16;
            gridcellSize = 16;
    }
    createBlockContainers(gridRowSize, '.grid-container');
    createBlocksInContainers(gridcellSize, '.grid-row');
})
