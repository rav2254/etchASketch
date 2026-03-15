const container = document.querySelector('#container');
const sizeDisplay = document.querySelector('#sizeDisplay'); //div displaying the current dimensions
const gridSize = document.querySelector('#pixelSelector'); 
const clearBtn = document.querySelector('#clear');
const modeSelector = document.querySelectorAll('input[type=radio]')
const colorSelector = document.querySelector('#colorSelector')
let mode = 'normal' //default value
let currentColor = colorSelector.value


gridSize.addEventListener('input', () => { //listen for changes in size selector bar
    generateGrid(gridSize.value)
    sizeDisplay.textContent = `Your current size is ${gridSize.value} X ${gridSize.value}`
})

function generateGrid (gridSizeValue){
    container.replaceChildren(); //remove existing pixels
    for (let i=0; i<(gridSizeValue**2); i++){
        let temp = document.createElement('div');
        temp.classList.add('pixel');
        temp.id = i;
        temp.style.flex = `0 0 ${100/gridSizeValue}%`// adjust flex basis based on number of pixels
        container.appendChild(temp);
    }
}

function generateRandomColor(){
    return `#${Math.random().toString(16).padEnd(8, '0').slice(2, 8)}`; //create random color value in hex format
}

modeSelector.forEach(elem => {  //listen for mode change and store value in mode variable
    elem.addEventListener('change', e=> {
        if(e.target.checked){
            mode = e.target.value
        }
    })
})

clearBtn.addEventListener('click', e=>{ //go through all pixels and change BG to white, probably not too efficient
    document.querySelectorAll('.pixel').forEach(elem => elem.style.backgroundColor ='white') 
})

colorSelector.addEventListener('input', ()=>{
    currentColor = colorSelector.value
})

container.addEventListener('mouseover',(e) => {
    let selectedPixel = e.target
    if (selectedPixel.classList.contains('pixel')){
        switch (mode){
            case 'normal':
                selectedPixel.style.backgroundColor = currentColor;
                break;
            case 'random':
                selectedPixel.style.backgroundColor = generateRandomColor();
                break;
            case 'fade':
                alert('Fade mode coming soon, Please select a different mode. ')
        }
    }
})

generateGrid(gridSize.value) //initialize grid