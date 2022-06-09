class Animacao {
    constructor(context) {
        this.context = context
        this.sprites = []
        this.ligado = false
    }

    novoSprite(sprite) {
        this.sprites.push(sprite)
    }
    
    limpartela() {
        context.clearRect(0, 0, canvas2.width, canvas2.height)
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

// let bola1 = new Bola(context)
// bola1.x = 100
// bola1.y = 20
// bola1.velo_x = 5
// bola1.velo_y = 3
// bola1.cor = 'blue'
// bola1.raio = 12

// let animacao = new Animacao(context)
// animacao.novoSprite(bola1)
// animacao.ligar()