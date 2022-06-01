'use strict'
const canvas1 = document.querySelector('#canvas1')
const context = canvas1.getContext('2d')

context.fillRect(10, 20, 80, 80)
context.strokeRect(100, 20, 80, 80)

// Canvas 2
const canvas2 = document.querySelector('#canvas2')
const context2 = canvas2.getContext('2d')

context2.fillStyle = 'red'
context2.fillRect(140, 50, 80, 80) // Por último que desenha

context2.lineWidth = 3
context2.strokeStyle = 'blue'
context2.strokeRect(140, 50, 80, 80)

// Canvas 3
const canvas3 = document.querySelector('#canvas3')
const context3 = canvas3.getContext('2d')

context3.beginPath() // Obrigatório

context3.moveTo(185, 20)
context3.lineTo(230, 150)
context3.lineTo(180, 100)
context3.lineTo(150, 150)
context3.lineTo(185, 20)

context3.lineWidth = 2
context3.strokeStyle = 'green'
context3.stroke()

// Canvas 4
const canvas4 = document.querySelector('#canvas4')
const context4 = canvas4.getContext('2d')

context4.beginPath()
context4.strokeStyle = 'green'
context4.arc(30, 100, 20, Math.PI / 2, 270 * Math.PI / 180, false)
context4.stroke()

context4.beginPath()
context4.strokeStyle = 'red'
context4.arc(330, 100, 20, 270 * Math.PI / 180, Math.PI / 2, false)
context4.stroke()

// Canvas 5
const canvas5 = document.querySelector('#canvas5')
const context5 = canvas5.getContext('2d')

let img = new Image()
img.src = '../games-js-master/01/img/ovni.png'

img.onload = function() {
    let pos = 5 // 1º img no ponto 4
    for (let index = 0; index < 5; index++) {
        context5.drawImage(img, pos, 10, 64, 32)
        pos += 70
    }
}