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
        if(moveType == 'spMove'){
            this.spMovement(hor, ver)
        } else if (moveType == 'brMove'){
            this.brMovement()
        }
        
    }

    spMovement(hor, ver){
        if(hor == 'smLeft'){
            this.x --
        } else if (hor == 'smRight'){
            this.x ++
        }

        if(ver == 'smUp'){
            this.y --
        }else if (ver == 'smDown'){
            this.y ++
        }
    }
    
    brMovement(){
        this.x += (random(-5, 5))
        this.y += (random(-5, 5))
    }
}