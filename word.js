class Word{
    constructor(text, size=12, color, alpha, style, movement='none', x, y, isText) {
        this.text = text,
        this.size = size,
        this.color = color,
        this.alpha = alpha,
        this.style = style,
        this.movement= movement,
        this.x = x,
        this.y = y,
        this.isText = isText
    }

    createBrush(){
        if(this.text){
            this.update()
            this.displayText()
        }else if(!this.text){
            // console.log(this.color)
            fill(this.color)
            circle(this.x, this.y, this.size)
        }
    }

    displayText(){
        let textC = color(this.color.r, this.color.g, this.color.b, this.alpha) 
        fill(textC)
        textSize(this.size)
        if(this.style=='BOLD'){
            textStyle(BOLD)
        } else if(this.style=='ITALIC'){
            textStyle(ITALIC)
        } else if(this.style=='NORMAL'){
            textStyle(NORMAL)
        } else if (this.style=='BOLDITALIC'){
            textStyle(BOLDITALIC)
        }
        text(this.text, this.x, this.y)
    }

    update(){
        let moveType = this.movement.split(' ')[0]
        let hor = this.movement.split(' ')[1]
        let ver = this.movement.split(' ')[2]
        let speed = parseInt(this.movement.split(' ')[3])
        if(moveType == 'spMove'){
            this.spMovement(hor, ver, speed)
        } else if (moveType == 'brMove'){
            this.brMovement(speed)
        }
    }

    spMovement(hor, ver, speed){
        let spSpeed = map(speed, 1, 100, 0.1, 8)
        console.log(this.movement)
        // console.log(speed)
        if(hor == 'smLeft'){
            this.x -= spSpeed 
        } else if (hor == 'smRight'){
            this.x += spSpeed
        }

        if(ver == 'smUp'){
            this.y -= spSpeed
        }else if (ver == 'smDown'){
            this.y += spSpeed
        }
    }
    
    brMovement(speed){
        let brSpeed = map(speed, 1, 100, 0.5, 50)
        let minbrSpeed = 0 - (brSpeed)
        this.x += (random(minbrSpeed, brSpeed))
        this.y += (random(minbrSpeed, brSpeed))
    }

    blink(){

    }

    reSize(){
        
    }

}