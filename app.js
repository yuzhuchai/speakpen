console.log("connected");

let hovering = false;
let cursorText = ''
let inputPen = false;

// the following functions creates responsive page layout ---------------------------------------------------
const consoleDiv = document.getElementById('console');
const containerDiv = document.getElementById('container');
const toolsDiv = document.getElementById('tools');
const extraDiv = document.getElementById('extra')
const canvasDiv = document.getElementById('canvasContainer')

const BORDER_SIZE = 6;

let y_pos;
let x_pos;
function resizeY(e){
    const dy = y_pos - e.y;
    y_pos = e.y;
    let consoleHeight = parseInt(getComputedStyle(consoleDiv, '').height)
    if((consoleHeight >= 60 && consoleHeight <= 400) || (consoleHeight < 60 && dy >= 0) || (consoleHeight > 400 && dy <= 0)){
        consoleDiv.style.height = (consoleHeight + dy) + "px";
        canvasDiv.style.height = (parseInt(getComputedStyle(canvasDiv, '').height) - dy) + "px";
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
        containerDiv.style.width = (parseInt(getComputedStyle(containerDiv, '').width) - dx) + "px";
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
        containerDiv.style.width = (parseInt(getComputedStyle(containerDiv, '').width) + dx) + "px";
        containerDiv.style.left = (parseInt(getComputedStyle(containerDiv, '').left) - dx) + "px";
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



// this function converts the pixel to percentage for responsive page layout ,, buggy--------------------------------------------
function convertPercentage(div, side){
    let percent 
    let child 
    let parent 
    if(side == 'height'){
        console.log(div)
        child = div.height();
        parent = div.offsetParent().height();
        console.log(div.offsetParent())
        
    } else if (side == 'width'){
        child = div.width()
        parent = div.offsetParent().width();
        console.log(div)
        console.log(div.offsetParent())
    }    
    percent = Math.round(100 * child /parent)
    let percentage = parseInt(percent) + '%'
    console.log(percentage)
    return percentage
}



// update the input text live  ----------------------------------------------------------------------------------
// this updates the title 
$('#title').on('input',function(e){
    $('#titleText').text(e.target.value)
})
// this updates the cursor text
$('#word').on('input',function(e){
    cursorText = e.target.value
    console.log(e.target.value)
    if(e.target.value == ''){
        inputPen = false;
    }else{
        inputPen = true;
    }
})


// this function id trying to display the word choice as brush on the cursor when course hovers over the canvas
$(document).mousemove(function(){
    if($('#canvasContainer:hover').length !=0){
        hovering = true;
    } else {
        hovering = false
    }
})