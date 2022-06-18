'use strict'
class Tiro {
    constructor(ctx, nave) {
        this.ctx = ctx
        this.nave = nave
        this.largura = 4
        this.altura = 10
        this.x = nave.x + nave.imgNave.width / 2 - this.largura / 2
        this.y = nave.y - this.altura
        this.speed = 10
        this.cor = 'yellow'
    }

    atualizar() {
        this.y -= this.speed
    }

    desenhar() {
        this.ctx.save()
        this.ctx.fillStyle = this.cor
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
        this.ctx.restore()
    }
}