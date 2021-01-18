class Word{
    constructor(text, size=12, color, style='normal', movement='none', x, y) {
        this.text = text,
        this.size = size,
        this.color = color,
        // this.font = font,
        this.style = style,
        this.movement= movement,
        this.x = x,
        this.y = y
    }

    display(){
        // this.color.setAlpha() 
        // console.log(this)
        text(this.text, this.x, this.y)
        console.log(this.color)
        // textSize(this.size)
    }

    update(){

    }
}