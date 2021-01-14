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
  consoleDiv.style.height = (parseInt(getComputedStyle(consoleDiv, '').height) + dy) + "px";
  containerDiv.style.height = (parseInt(getComputedStyle(containerDiv, '').height) - dy) + "px";
  console.log('hello'+y_pos)
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
    extraDiv.style.width = (parseInt(getComputedStyle(extraDiv, '').width) + dx) + "px";
    canvasDiv.style.width = (parseInt(getComputedStyle(canvasDiv, '').width) - dx) + "px";
    console.log('hello'+x_pos)
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
    toolsDiv.style.width = (parseInt(getComputedStyle(toolsDiv, '').width) - dx) + "px";
    canvasDiv.style.width = (parseInt(getComputedStyle(canvasDiv, '').width) + dx) + "px";
    canvasDiv.style.left = (parseInt(getComputedStyle(canvasDiv, '').left) - dx) + "px";
    console.log('hello'+x_pos)
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





