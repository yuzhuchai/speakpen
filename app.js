console.log("connected");

let hovering = false;
let cursorText = ''
let inputPen = false;
let cursorColor = '#000000'
let cursorSize = 12
let curosrBold = false  
let cursorItalics = false
let movementsExpand = false
let colorExpands = false 
let alphaVal = 255
let bgColor='#ffffff'
// let expandsClicked = false 

// the following functions creates responsive page layout ---------------------------------------------------
const consoleDiv = document.getElementById('console');
const containerDiv = document.getElementById('container');
const toolsDiv = document.getElementById('tools');
const extraDiv = document.getElementById('extra')
const canvasDiv = document.getElementById('canvasContainer')

const BORDER_SIZE = 2;

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
    // there is a big here!!!!!!!!!!!
    if(e.offsetX > (e.offsetX+BORDER_SIZE) ){
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

// this function turns color hex code into rgb value ---------------------------------------------------
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

// update the input text live  ----------------------------------------------------------------------------------
// this updates the backgroundColor
$('#bgColor').on('input',function(e){
    bgColor = e.target.value 
    rgbCol = hexToRgb(bgColor)
    $('.toolBar').css('background', `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.4)`)
    $('.toolBar').css('border-color', `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`)

    // console.log($('.toolbar'))
    // console.log(bgColor)
})


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
//this opens up the color selection
$('#color').on('click',function(e){
    if(!colorExpands){
        colorExpands = true
        e.target.style.backgroundColor = 'red'
        $('#colorExpandDiv').css('display','block') 
    } else if(colorExpands){
        colorExpands = false
        e.target.style.backgroundColor = ''
        $('#colorExpandDiv').css('display','none')  
    }
})

//this updates the cursor color
$('#colorPicker').on('input',function(e){
    // console.log(e.target.value)
    cursorColor = e.target.value
})
//this sets the alpha value of the text 
$('#alpha').on('input',function(e){
    alphaVal = parseInt(e.target.value)
    console.log(alphaVal)
})
//this updates the cursor size
$('#size').on('input',function(e){
    cursorSize = parseInt(e.target.value)
})
// this updates sytle - bold:
$('#bold').on('click',function(e){
    if(!curosrBold){
        curosrBold = true
        e.target.style.backgroundColor = 'red'
    } else if(curosrBold){
        curosrBold = false
        e.target.style.backgroundColor = ''
    }
})
// this updates style - italics:
$('#italics').on('click',function(e){
    if(!cursorItalics){
        cursorItalics = true
        e.target.style.backgroundColor = 'red'
    } else if(cursorItalics){
        cursorItalics = false
        e.target.style.backgroundColor = ''
    }
})
//this opens up the movement options:
$('#movements').on('click',function(e){
    if(!movementsExpand){
        movementsExpand = true
        e.target.style.backgroundColor = 'red'
        $('#movementsExpandDiv').css('display','block') 
        
    } else if(movementsExpand){
        movementsExpand = false
        e.target.style.backgroundColor = ''
        $('#movementsExpandDiv').css('display','none')  
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