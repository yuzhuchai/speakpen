console.log("connected");


const consoleDiv = document.getElementById('console');
const containerDiv = document.getElementById('container');
const toolsDiv = document.getElementById('tools');
const extraDiv = document.getElementById('extra')
const canvasDiv = document.getElementById('canvasContainer')

const BORDER_SIZE = 4;

let y_pos;
let x_pos;
function resizeY(e){
    const dy = y_pos - e.y;
    y_pos = e.y;
    let consoleHeight = parseInt(getComputedStyle(consoleDiv, '').height)
    if((consoleHeight >= 60 && consoleHeight <= 400) || (consoleHeight < 60 && dy >= 0) || (consoleHeight > 400 && dy <= 0)){
        consoleDiv.style.height = (consoleHeight + dy) + "px";
        containerDiv.style.height = (parseInt(getComputedStyle(containerDiv, '').height) - dy) + "px";
        console.log(dy)
    } 
}

consoleDiv.addEventListener("mousedown", function(e){
  if (e.offsetY < BORDER_SIZE) {
    y_pos = e.y;
    document.addEventListener("mousemove", resizeY, false);
  }
}, false);


function resizeXRight(e){
    const dx = x_pos - e.x;
    x_pos = e.x;
    let extraWidth = parseInt(getComputedStyle(extraDiv, '').width)
  if((extraWidth >= 60 && extraWidth <=400) || (extraWidth < 60 && dx >= 0) || (extraWidth > 400 && dx <=0)){
        extraDiv.style.width = (extraWidth + dx) + "px";
        canvasDiv.style.width = (parseInt(getComputedStyle(canvasDiv, '').width) - dx) + "px";
        console.log(extraWidth, dx)
    }
}

extraDiv.addEventListener('mousedown', function(e){
    if(e.offsetX < BORDER_SIZE){
        x_pos = e.x
        document.addEventListener('mousemove',resizeXRight, false)
    }
})

function resizeXLeft(e){
    const dx = x_pos - e.x;
    x_pos = e.x;
    let toolsWidth = parseInt(getComputedStyle(toolsDiv, '').width)
    if((toolsWidth >=60 && toolsWidth <= 400) || (toolsWidth < 60 && dx <= 0) || (toolsWidth > 400 && dx >= 0)){
        toolsDiv.style.width = (toolsWidth - dx) + "px";
        canvasDiv.style.width = (parseInt(getComputedStyle(canvasDiv, '').width) + dx) + "px";
        canvasDiv.style.left = (parseInt(getComputedStyle(canvasDiv, '').left) - dx) + "px";
        // console.log('hello'+x_pos)
    }
}

toolsDiv.addEventListener('mousedown', function(e){
    if(e.offsetX > BORDER_SIZE){
        x_pos = e.x
        document.addEventListener('mousemove',resizeXLeft, false)
    }
})

document.addEventListener("mouseup", function(){
    document.removeEventListener("mousemove", resizeY,false);
    document.removeEventListener("mousemove", resizeXRight,false);
    document.removeEventListener("mousemove", resizeXLeft,false);
}, false);





