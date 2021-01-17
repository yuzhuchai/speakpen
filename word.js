class Word{
    constructor(text, size=12, color, font, style='normal', movement='none') {
        this.text = text,
        this.size = size,
        this.color = color,
        this.font = font,
        this.style = style,
        this.movement= movement
    }

    display(){
        return this.text
    }

    update(){

    }
}