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
        if(this.movement){
            let moveType = this.movement.split(' ')[0]
            let hor = this.movement.split(' ')[1]
            let ver = this.movement.split(' ')[2]
            let speed = parseInt(this.movement.split(' ')[3])
            let final = parseInt(this.movement.split(' ')[4])
            let loop = this.movement.split(' ')[5]
    
            if(moveType == 'spMove'){
                this.spMovement(hor, ver, speed)
            } else if (moveType == 'brMove'){
                this.brMovement(speed)
            } else if (moveType == 'reSize'){
                this.changeSize(final, loop, speed)
            } else if (moveType == 'blink'){
                let seed = random(10)
                this.blink(speed,seed)
            }
        }

    }

    spMovement(hor, ver, speed){
        let spSpeed = map(speed, 1, 100, 0.1, 8)
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

    blink(speed,seed){
        seed++
        console.log(seed)
        this.alpha = 128 + 128 * Math.sin(seed)
    }

    changeSize(final, loop, speed){
        // let changeSpeed =  map(speed, 1,100,)
        let initial = this.size 
        // let pervStep = step
        let step = (final - this.size) / Math.abs(final - this.size)
        this.size += step
    }

}