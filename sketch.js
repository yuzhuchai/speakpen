let drawn = []
let fillRect = {
    x:null,
    y:null,
    width: null,
    height: null,
}

let fillTextPos = {
    xMin: null,
    yMin: null,
    xMax: null,
    yMax: null
}

let fillOnRelease = false 

function setup(){
   
}


function draw(){
    // console.log(bgColor)
    // this sets the canvas size responsive -------------------------------------------------
    let mainWdidth = document.getElementById("canvasContainer").offsetWidth
    let mainHeight = document.getElementById("canvasContainer").offsetHeight
    createCanvas(mainWdidth,mainHeight)
    background(bgColor)
    textAlign(CENTER,CENTER)
    // this sets the cursor text responsive -------------------------------------------------
    let c = color(cursorColor)
    c.setAlpha(alphaVal)
    fill(c)
    textSize(cursorSize)
    if(curosrBold && !cursorItalics){
        cursorStyle = 'BOLD'
        textStyle(BOLD)
    } else if (cursorItalics && !curosrBold){
        cursorStyle = 'ITALIC'
        textStyle(ITALIC)
    } else if (curosrBold && cursorItalics){
        cursorStyle='BOLDITALIC'
        textStyle(BOLDITALIC)
    } else if(!curosrBold && !cursorItalics){
        cursorStyle='NORMAL'
        textStyle(NORMAL)
    }
    // this sets the cursor 
    if(inputPen && !erasorType){
        text(cursorText, mouseX, mouseY)
    } else if(!inputPen && !erasorType){
        text('pen', mouseX, mouseY)
    } else if(inputPen && erasorType=='et'){
        noFill()
        textSize(erasorSize)
        stroke(cursorColor)
        text(cursorText, mouseX, mouseY)
    }else if(inputPen && erasorType=='en'){
        stroke(cursorColor)
        noFill()
        circle(mouseX,mouseY, erasorSize)
    }


    
    // tihs pushed the text obj into a drawn so that it will update evey frame 
    noStroke()
    if(mouseIsPressed && hovering){
        // console.log('hello')
        // console.log(fillType)
        if(erasorType == 'et'){
            // this is drawing the text as erasors 
            drawn.push(new Word(cursorText, erasorSize, rgbCol, 255, cursorStyle, null, mouseX, mouseY, false))
        } else if(erasorType == 'en'){
            // this is drawng a regular erasor
            drawn.push(new Word(null,erasorSize,bgColor,255,null,null,mouseX, mouseY, false))
        } else if (!erasorType && !fillType){
            // this is drawin the regular text 
            drawn.push(new Word(cursorText, cursorSize, cursorRGB, alphaVal, cursorStyle, 'movement', mouseX, mouseY, true))
        } 

    }

    // this draws everywords on to the canvas everyframe-------------------------------------
    for (let word of drawn){
        // word.displayText()
        word.createBrush()
    }


    // this function erase the canvas -----------------------------------------------------
    if(eraseAll){
        drawn = []
        // console.log('cleared', drawn)
        eraseAll = false;
    }


// this function resent the erasors color to the same as the bgcolor when bgcolor is changed --------------------------
    if(bgColorChanged){
        drawn.map((word) => {
            if(!word.isText && !word.text){
                word.color = bgColor
            } else if(!word.isText && word.text){
                word.color = rgbCol
            }
        })
    }




// draw the cursor text again so it always stays on top of the drawings, always visible.  ------- this function stays at the end ------------
    if(inputPen && !erasorType){
        text(cursorText, mouseX, mouseY)
    } else if(!inputPen && !erasorType){
        text('pen', mouseX, mouseY)
    } else if(inputPen && erasorType=='et'){
        noFill()
        textSize(erasorSize)
        stroke(cursorColor)
        text(cursorText, mouseX, mouseY)
    }else if(inputPen && erasorType=='en'){
        stroke(cursorColor)
        noFill()
        circle(mouseX,mouseY, erasorSize)
    }
    // this creates the fill function 
    if(fillType && mouseIsPressed && !erasorType){
        noFill()
        stroke(cursorColor)
        console.log('little bit confused ')
        createFillRect(mouseX,mouseY)
    }   

}



// this function checks the positions that mouse covers.   
function createFillRect(x,y){
    if(!fillRect.x){
        fillTextPos.xMin = mouseX 
        fillTextPos.yMin = mouseY 
        fillRect.x = mouseX
        fillRect.y = mouseY
    } 
    fillRect.width = parseInt(x) - parseInt(fillRect.x)
    fillRect.height = parseInt(y) - parseInt(fillRect.y)
    rect(fillRect.x, fillRect.y, fillRect.width, fillRect.height)
}

// this function push the random filling text into the drawn
function mouseReleased(){
    if(fillRect.x){
        fillTextPos.xMax = mouseX 
        fillTextPos.yMax = mouseY 
        fillRect.x = null
        fillRect.y = null
        fillOnRelease = true 
        for (let i = 0; i <= 100; i++){
            drawn.push(new Word(cursorText, cursorSize, cursorRGB, alphaVal, cursorStyle, 'movement', random(fillTextPos.xMin, fillTextPos.xMax), random(fillTextPos.yMin, fillTextPos.yMax), true))
        }
    }


}