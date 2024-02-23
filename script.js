function makeGridLayout(){
    const grid = document.querySelector('.grid-container');
    const slide = document.querySelector('.slider');
    const span = document.querySelector('span');
    slide.oninput = ()=>{
        const size = slide.value;
        span.innerHTML = size;
        console.log(size);
    }
}

makeGridLayout();