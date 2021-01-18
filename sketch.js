let drawn = []

function setup(){
   
}


function draw(){
    // console.log(bgColor)
    // this sets the canvas size responsive -------------------------------------------------
    let mainWdidth = document.getElementById("canvasContainer").offsetWidth
    let mainHeight = document.getElementById("canvasContainer").offsetHeight
    createCanvas(mainWdidth,mainHeight)
    background(bgColor)
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
        if(erasorType == 'et'){
            drawn.push(new Word(cursorText, erasorSize, rgbCol, 255, cursorStyle, null, mouseX, mouseY))
        } else if(erasorType == 'en'){
            drawn.push(new Word(null,erasorSize,bgColor,255,null,null,mouseX, mouseY))
        } else if (!erasorType){
            drawn.push(new Word(cursorText, cursorSize, cursorRGB, alphaVal, cursorStyle, 'movement', mouseX, mouseY))
            // console.log(erasorType)
        }
    }

    for (let word of drawn){
        // word.displayText()
        word.createBrush()
    }

}