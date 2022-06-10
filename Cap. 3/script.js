'use strict'
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let pos = 0
let tam = 25
let teclado = new Teclado(document)

desenharPersonagem()

requestAnimationFrame(animar)
function animar() {
    if (teclado.pressionada("ArrowLeft") && pos >= 10) {
        pos -= 10
    } else if (teclado.pressionada("ArrowRight") && pos < canvas.width - tam) {
        pos += 10
    }

    desenharPersonagem()
    requestAnimationFrame(animar)
}

function desenharPersonagem() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(pos, 80, tam, 50)
}

//teclado.disparou(espaco)