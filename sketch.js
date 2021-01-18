let drawn = []
// let cursorStyle 

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
    if(inputPen){
        text(cursorText, mouseX, mouseY)
    } else {
        text('pen', mouseX, mouseY)
    }

    if(mouseIsPressed){
        console.log('pressed')
        // console.log(cursorStyle)
        drawn.push(new Word(cursorText, cursorSize, cursorRGB, alphaVal, cursorStyle, 'movement', mouseX, mouseY))
    }

    for (let word of drawn){
        word.display()
    }

}