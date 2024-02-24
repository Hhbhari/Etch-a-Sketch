const grid = document.querySelector('.grid-container');
const slide = document.querySelector('.slider');
const span = document.querySelector('span');


function makeGridLayout(){
    slide.oninput = ()=>{
        const size = slide.value;
        const gridWidth = parseInt(getComputedStyle(grid).width);
        removeChildNode();
        for(let i=1; i<=size*size;i++){
            grid.appendChild(makeGrid(gridWidth/size));
        }
        span.innerHTML = size;
        console.log(size);
    }
}

function makeGrid(divSize){
    const divChild = document.createElement('div');
    divChild.classList.add('grid-item');
    divChild.style.width = divChild.style.height = `${divSize}px`;
    return divChild;
}

function removeChildNode(){
    while(grid.hasChildNodes()){
        console.log()
        grid.removeChild(grid.firstChild);
    }
}


makeGridLayout();