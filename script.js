const grid = document.querySelector('.grid-container');
const slide = document.querySelector('.slider');
const span = document.querySelector('span');


function makeGridLayout(){
    slide.oninput = ()=>{
        const size = slide.value;
        removeChildNode();
        span.innerHTML = size;
        console.log(size);
    }
}

function removeChildNode(){
    while(grid.hasChildNodes()){
        console.log()
        grid.removeChild(grid.firstChild)
    }
}
makeGridLayout();