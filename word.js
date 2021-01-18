class Word{
    constructor(text, size=12, color, alpha, style='normal', movement='none', x, y) {
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
        console.log(this.color)
        let textC = color(this.color.r, this.color.g, this.color.b, this.alpha) 
        // textC.setAlpha(alpha) 
        // console.log(textC)
        fill(textC)
        textSize(this.size)
        text(this.text, this.x, this.y)
    }

    update(){

    }
}