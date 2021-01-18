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
        textStyle(BOLD)
    } else if (cursorItalics && !curosrBold){
        textStyle(ITALIC)
    } else if (curosrBold && cursorItalics){
        textStyle(BOLDITALIC)
    } else if(!curosrBold && !cursorItalics){
        textStyle(NORMAL)
    }
    if(inputPen){
        text(cursorText, mouseX, mouseY)
    } else {
        text('pen', mouseX, mouseY)
    }

    // console.log(cursorText,'<---cursorTextin draw')
    if(mouseIsPressed){
        console.log('pressed')
        // console.log(cursorText,'<===cursorText when mousepRessed ')
        // drawn.push(new Word('hello'))
        drawn.push(new Word(cursorText, cursorSize, cursorColor, 'style', 'movement', mouseX, mouseY))
        // console.log(drawn)
    }

    for (let word of drawn){
        // console.log(word)
        fill(0,0,0)
        word.display()
    }

    text('hello?', 10,10)
}