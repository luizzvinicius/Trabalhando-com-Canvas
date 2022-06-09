'use strict'
const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')

let pos = 130
let tam = 20

desenharPersonagem()

document.addEventListener('keydown', function(e) {
    if (e.key == "ArrowLeft") {
        if (pos <= 0) return
        pos -= 10
    } else if (e.key == "ArrowRight") {
        if (pos >= canvas.width - tam) return
        pos += 10
    }
    
    desenharPersonagem()
})

function desenharPersonagem() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(pos, 100, tam, 20)
}

