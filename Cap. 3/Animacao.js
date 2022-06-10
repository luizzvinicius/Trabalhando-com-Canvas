class Animacao {
    constructor(ctx) {
        this.ctx = ctx
        this.sprites = []
        this.ligado = false
    }

    novoSprite(sprite) {
        this.sprites.push(sprite)
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

    ligar() {
        this.ligado = true
        this.proximoFrame()
    }

    desligar() {
        this.ligado = false
    }
}