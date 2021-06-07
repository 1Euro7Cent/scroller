module.exports = class Scroller {
    constructor(text, letters) {
        this.text = addSpaces(text, letters)
        this.letters = letters + 1
        this.pos = -1
        this.scrolled = ''
    }
    scroll(positions) {
        var newPos = this.pos + positions
        this.pos = newPos
        var output = makeScroll(this.text, this.letters, newPos)
        this.pos = output[1]
        this.scrolled = output[0]
        return output[0]
    }
}
function makeScroll(text, letters, position) {
    var can = false
    var count = 0
    var output = ''
    if (position >= text.length) {
        position = 0
        //text = addSpaces(text, position)
    }
    for (let t in text) {
        if (t == position) can = true
        if (count >= letters) can = false
        if (can) {
            count++
            output = output + text[t]
        }
    }
    return [output, position]
}
function addSpaces(text, count) {
    for (let i = 1; i < text.length; i++) {
        if (i <= count) {
            text = ' ' + text
        }
    }
    return text
}
