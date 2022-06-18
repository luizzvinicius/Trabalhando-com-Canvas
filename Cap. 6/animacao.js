'use strict'
class Animacao {
    constructor(ctx) {
        this.ctx = ctx
        this.sprites = []
        this.ligado = false
    }
    
    proximoFrame() {
        if (!this.ligado) return

        this.limpartela()
        this.sprites.forEach(sprite => sprite.atualizar())
        this.sprites.forEach(sprite => sprite.desenhar())

        requestAnimationFrame(() => this.proximoFrame())
    }
    
    novoSprite(sprite) {
        this.sprites.push(sprite)
        sprite.animacao = this
    }

    ligar() {
        this.ligado = true
        this.proximoFrame()
    }

    desligar() {
        this.ligado = false
    }

    limpartela() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
}