class Word{
    constructor(text, size=12, color, alpha, style, movement='none', x, y) {
        this.text = text,
        this.size = size,
        this.color = color,
        this.alpha = alpha,
        // this.font = font,
        this.style = style,
        this.movement= movement,
        this.x = x,
        this.y = y
    }

    display(){
        let textC = color(this.color.r, this.color.g, this.color.b, this.alpha) 
        // console.log(this.style)
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

    }
}