console.log("connected");


let hovering = false;
let cursorText = 'pen'
let inputPen = false;
let cursorColor = '#000000'
let cursorRGB = hexToRgb('#000000')
let cursorSize = 12
let curosrBold = false  
let cursorItalics = false
// let movementsExpand = false
// let erasorExpand = false 
// let fillFuncExpand = false  
let colorExpands = false 
let alphaVal = 255
let bgColor='#ffffff'
let rgbCol=hexToRgb('#ffffff')
let cursorStyle = 'NORMAL'
let erasorType=null
let erasorSize = 12
let eraseAll = false 
let bgColorChanged = false 
let fillType = null
let fillSelect = false 
let eraseerSelect = false 

// the following functions creates responsive page layout ---------------------------------------------------
// const consoleDiv = document.getElementById('console');
const containerDiv = document.getElementById('container');
const toolsDiv = document.getElementById('tools');
// const extraDiv = document.getElementById('extra')
const canvasDiv = document.getElementById('canvasContainer')



// this function displays the function of the button when hovering over 
$('.menuIcon').mouseenter(function(e){
    // console.log(e.target.className)
    let name = e.target.className.split(" ")
    // console.log(name)
    $('#menuText').html(name[0].replace("-",' '))
}).mouseleave(function(){
    $('#menuText').html('')
})
$('.toolBarIcon').mouseenter(function(e){
    let name = e.target.className.split(' ')
    $('#toobarText').html(name[0].replace("-",' '))
}).mouseleave(function(){
    $('#toobarText').html('')
})


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
    bgColorChanged = true
    bgColor = e.target.value 
    rgbCol = hexToRgb(bgColor)
    // $('.toolBar').css('background', `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.4)`)
    // $('.toolBar').css('border-color', `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`)
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
// $('#color').on('click',function(e){
//     if(!colorExpands){
//         colorExpands = true
//         // e.target.style.backgroundColor = 'red'
//         e.target.style.backgroundColor = `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`

//         $('#colorExpandDiv').css('display','block') 
//     } else if(colorExpands){
//         colorExpands = false
//         e.target.style.backgroundColor = ''
//         $('#colorExpandDiv').css('display','none')  
//     }
// })

//this updates the cursor color
$('#colorPicker').on('input',function(e){
    // console.log(e.target.value)
    cursorColor = e.target.value
    cursorRGB = hexToRgb(cursorColor)
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
        e.target.style.backgroundColor = `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`
    } else if(curosrBold){
        curosrBold = false
        e.target.style.backgroundColor = ''
    }
})
// this updates style - italics:
$('#italics').on('click',function(e){
    if(!cursorItalics){
        cursorItalics = true
        e.target.style.backgroundColor = `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`
    } else if(cursorItalics){
        cursorItalics = false
        e.target.style.backgroundColor = ''
    }
})
//this opens up the movement options:
// $('#movements').on('click',function(e){
//     if(!movementsExpand){
//         movementsExpand = true
//         e.target.style.backgroundColor = `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`
//         $('#movementsExpandDiv').css('display','block') 
        
//     } else if(movementsExpand){
//         movementsExpand = false
//         e.target.style.backgroundColor = ''
//         $('#movementsExpandDiv').css('display','none')  
//     }
// })


// this is to highlight the selected pens method 
$('.penItems').on('click',function(e){
    let nodes = document.getElementsByClassName('penItems')
    for(let i = 0; i< nodes.length; i++){
        nodes[i].style.border = '2px solid black'
    }
    e.target.style.border = '3px solid #3EB4F7'
    // console.log(e.target.id)
    let penMethod = e.target.id
    if(penMethod == "pen"){
        fillSelect = false;
        eraseerSelect = false 
    } else if(penMethod == 'fillFunc'){
        fillSelect = true;
        eraseerSelect = false 
    } else if(penMethod == 'eraseFunc'){
        eraserSelect = true 
        fillSelect = false 
    }
    console.log(fillSelect)
})




// thi opens the fill options:
// $('#fillFunc').on('click', function(e){
//     // console.log('clicked')
//     if(!fillFuncExpand){
//         fillFuncExpand = true
//         e.target.style.backgroundColor = `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`
//         $('#fillExpandDiv').css('display','block') 
    
//     } else if(fillFuncExpand){
//         fillFuncExpand = false 
//         e.target.style.backgroundColor = ''
//         $('#fillExpandDiv').css('display','none') 
//     }
// })


// this function picks the fill methods 
$('.fillType').on('click', function(e){
    let fillSelect = document.getElementsByClassName('fillType')
    fillSelect[0].style.backgroundColor = ''
    fillSelect[1].style.backgroundColor = ''
    if(fillType != e.target.value){
        fillType = e.target.value
        e.target.style.backgroundColor = `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`
    } else if (fillType == e.target.value){
        fillType = null
        e.target.style.backgroundColor = ''
    }
    // console.log(fillType)
})



// this opens the erasor options:
$('#eraseFunc').on('click', function(e){
    if(!erasorExpand){
        erasorExpand = true
        e.target.style.backgroundColor = `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`
        $('#eraseExpandDiv').css('display','block') 
    } else if(erasorExpand){
        erasorExpand = false 
        e.target.style.backgroundColor = ''
        $('#eraseExpandDiv').css('display','none') 
    }
})

// the following function determins which type of erasor is picked
$('.erasorType').on('click',function(e){
    let erasors = document.getElementsByClassName('erasorType')
    erasors[0].style.backgroundColor=''
    erasors[1].style.backgroundColor=''
    if(erasorType != e.target.value){
        erasorType = e.target.value
        e.target.style.backgroundColor = `rgba(${rgbCol.r}, ${rgbCol.g}, ${rgbCol.b}, 0.6)`
    }else if(erasorType == e.target.value){
        erasorType = null
        e.target.style.backgroundColor = ''
    }
})
// this updates the size of the erasor 
$('#erasesize').on('input',function(e){
    erasorSize = parseInt(e.target.value)
})

// this function erase the whole canvas
$('#eraseAll').on('click',function(e){
    eraseAll = true
})

// this function id trying to display the word choice as brush on the cursor when course hovers over the canvas
$(document).mousemove(function(){
    if($('#canvasContainer:hover').length !=0){
        hovering = true;
    } else {
        hovering = false
    }
})



