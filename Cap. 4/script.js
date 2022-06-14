'use strict'
const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')

let imgSonic = new Image()
imgSonic.setAttribute('src', '../games-js-master/04/spritesheet.png')

imgSonic.addEventListener('load', () => {
    let linhas = 3
    let colunas = 8 // Mapeia a imagem
    let largura = imgSonic.width / colunas
    let altura = imgSonic.height / linhas
    
    // Imagem desejada
    let queroLinha = 2
    let queroColuna = 7

    // Recorte
    let x = largura * queroColuna
    let y = altura * queroLinha

    // ctx.drawImage(imgSonic, x, y, largura, altura, 100 , 100, largura, altura)

})

function gameLoop() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}


const sheet = new SpriteSheet(ctx, imgSonic, 3, 8)
sheet.intervalo = 60
sheet.line = 1
imgSonic.addEventListener('load', gameLoop)

sheet.proximoQuadro()
sheet.desenhar(100, 100)
requestAnimationFrame(gameLoop)