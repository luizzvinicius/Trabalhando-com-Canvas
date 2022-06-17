'use strict'
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let bola1 = new Bola(ctx)
bola1.x = 12
bola1.y = 20
bola1.velo_x = 6
bola1.velo_y = 10

let bola2 = new Bola(ctx)
bola2.x = 80
bola2.y = 150
bola2.velo_x = 8
bola2.velo_y = 3
bola2.cor = 'lightblue'

let colisor = new Colisor()
colisor.novoSprite(bola1)
colisor.novoSprite(bola2)

requestAnimationFrame(animar)
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    bola1.atualizar()
    bola2.atualizar()
    
    bola1.desenhar()
    bola2.desenhar()

    colisor.processar()
    requestAnimationFrame(animar)
}