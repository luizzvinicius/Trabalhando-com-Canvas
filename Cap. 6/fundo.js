'use strict'
class Fundo {
    constructor(ctx, imagem) {
        this.ctx = ctx
        this.imagem = imagem
        this.speed = 0
        this.posEmenda = 0
    }

    desenhar() {
        let img = this.imagem

        // 1º cópia da imagem
        let posY = this.posEmenda - img.height
        this.ctx.drawImage(img, 0, posY, img.width, img.height)

        // 2º cópia da imagem
        posY = this.posEmenda
        this.ctx.drawImage(img, 0, posY, img.width, img.height)
    }

    atualizar() {
        this.posEmenda += this.speed

        if (this.posEmenda > this.imagem.height) this.posEmenda = 0
    }
}