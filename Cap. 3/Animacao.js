'use strict'
class Animacao {
    constructor(ctx) {
        this.ctx = ctx
        this.sprites = []
        this.ligado = false
    }

    limpartela() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }

    proximoFrame() {
        if (!this.ligado) return

        this.limpartela()

        this.sprites.forEach(sprite => sprite.atualizar())
        this.sprites.forEach(sprite => sprite.desenhar())

        let animacao = this
        requestAnimationFrame(() => animacao.proximoFrame())
    }
    
    novoSprite(sprite) {
        this.sprites.push(sprite)
    }

    ligar() {
        this.ligado = true
        this.proximoFrame()
    }

    desligar() {
        this.ligado = false
    }
}