'use strict'
class Nave {
    constructor(ctx, teclado, imgNave) {
        this.ctx = ctx
        this.teclado = teclado
        this.imgNave = imgNave
        this.x = 0
        this.y = 0
        this.speed = 0
    }

    atualizar() {
        let teclado = this.teclado
        if (teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
            this.x -= this.speed
        }
        
        if (teclado.pressionada(SETA_DIREITA) && this.x < this.ctx.canvas.width - this.imgNave.width) {
            this.x += this.speed
        }

        if (teclado.pressionada(SETA_CIMA) && this.y > 0) {
            this.y -= this.speed
        }

        if (teclado.pressionada(SETA_BAIXO) && this.y < this.ctx.canvas.height - this.imgNave.height) {
            this.y += this.speed
        }
    }

    atirar() {
        let tiro = new Tiro(this.ctx, this)
        this.animacao.novoSprite(tiro)
    }

    desenhar() {
        this.ctx.drawImage(this.imgNave, this.x, this.y, this.imgNave.width, this.imgNave.height)
    }
}