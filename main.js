/**
 * Creates a specified number of block container divs and appends them to a parent element.
 * @param {number} containerCount - The number of block container divs to create.
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
        newCont.className = 'block-container';
        parentDiv.appendChild(newCont);
    }
}

function createBlocksInContainers(blockCount, parentSelector) {
    const allBlockContainers = document.querySelectorAll('.block-container');

    allBlockContainers.forEach(container => {
        for (let i = 0; i < blockCount; i++) {
            const blockDiv = document.createElement('div');
            blockDiv.className = 'block';
            container.appendChild(blockDiv);
        }
    });
}

createBlockContainers(16, '.etch-a-sketch');
createBlocksInContainers(16, '.block-container');