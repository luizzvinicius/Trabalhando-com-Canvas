import { Bola } from './Bola.js'

const canvas1 = document.querySelector('#canvas1')
const context = canvas1.getContext('2d')

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
        //let ctx = this.context
        context.clearRect(0, 0, canvas1.width, canvas1.height)
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
export { canvas1, context }

let bola1 = new Bola(context)
bola1.x = 100
bola1.y = 200
bola1.velo_x = 20
bola1.velo_y = -10
bola1.cor = 'blue'
bola1.raio = 12

let bola2 = new Bola(context)
bola2.x = 200
bola2.y = 100
bola2.velo_x = -10
bola2.velo_y = 20
bola2.cor = 'red'
bola2.raio = 20

let animacao = new Animacao(context)
animacao.novoSprite(bola1)
animacao.novoSprite(bola2)
animacao.ligar()
