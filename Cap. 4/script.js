'use strict'
const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')

let imgSonic = new Image()
imgSonic.setAttribute('src', '../games-js-master/04/spritesheet.png')

let teclado = new Teclado(document)
let animacao = new Animacao(ctx)
let sonic  = new Sonic(ctx, teclado, imgSonic)
sonic.x = 0
sonic.y = 100

animacao.novoSprite(sonic)

let sheet = new SpriteSheet(ctx, imgSonic, 3, 8)
sheet.intervalo = 60
sheet.linha = 1
imgSonic.addEventListener('load', gameLoop)

function gameLoop() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

sheet.proximoQuadro()
sheet.desenhar(100, 100)
requestAnimationFrame(gameLoop)
animacao.ligar()