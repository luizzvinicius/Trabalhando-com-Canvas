import { canvas1, context } from './Animacao.js'
export class Bola {
    constructor(context) {
        this.context = context
        this.x = 0
        this.y = 0
        this.velo_x = 0
        this.velo_y = 0
        this.raio = 15
        this.cor = 'black'
    }

    atualizar() {
        //let ctx = this.context

        if (this.x < this.raio || this.x > canvas1.width - this.raio) {
            this.velo_x *= -1
        }
        
        if (this.y < this.raio || this.y > canvas1.height - this.raio) {
            this.velo_y *= -1
        }

        this.x = this.velo_x
        this.y = this.velo_y
    }

    desenhar() {
        //let ctx = this.context
        context.save()
        context.fillStyle = this.cor

        context.beginPath()
        context.arc(this.x, this.y, 0, Math.PI * 2, false)
        context.fill()

        context.restore()
    }
}