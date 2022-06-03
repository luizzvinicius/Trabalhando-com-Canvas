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

img.onload = function () {
    let pos = 5 // 1º img no ponto 4
    for (let index = 0; index < 5; index++) {
        context5.drawImage(img, pos, 10, 64, 32)
        pos += 70
    }
}

// Canvas 6
const canvas6 = document.querySelector('#canvas6')
const context6 = canvas6.getContext('2d')

let x = 30
let y = 100
let raio = 50

let anteior = new Date().getTime()
requestAnimationFrame(mexer)

function mexer() {
    let atual = new Date().getTime()
    let decorrido = atual - anteior
    // Dá a sensação de velocidade

    context6.clearRect(0, 0, canvas6.width, canvas6.height)
    context6.drawImage(img, x, 10, 64, 32)
    // context6.clearRect(0, 0, canvas6.width, canvas6.height);
    // context6.beginPath()
    // context6.arc(x, y, raio, 0, Math.PI * 2)
    // context6.stroke()

    let speed = 50
    x += speed * decorrido / 1000
    requestAnimationFrame(mexer)
}

// Orientação a Objetos
// Tarefas de acelerar, frear e virar

class Carro {
    constructor(cor, velocidadeMaxima) {
        this.cor = cor
        this.velocidadeMaxima = velocidadeMaxima
        this.velocidadeAtual = 0
    }

    acelerar() {
        this.velocidadeAtual += 25
    }
}

let meuCarro = new Carro('Marrom', 234)
let oponente = new Carro('Azul', 231)

meuCarro.acelerar()
let res = document.querySelector('#res')
res.innerHTML = `<p class="paragraph">Cor: ${meuCarro.cor} <br> Velocidade atual: ${meuCarro.velocidadeAtual}</p>`
