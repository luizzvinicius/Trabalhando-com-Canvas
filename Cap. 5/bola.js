'use strict'
class Bola {
    constructor(context) {
        this.context = context
        this.x = 0
        this.y = 0
        this.velo_x = 0
        this.velo_y = 0
        this.raio = 15
        this.cor = 'black'
    }

    retangulosColisao() {
        return [
            {
                x: this.x - this.raio,
                y: this.y - this.raio,
                largura: this.raio * 2,
                altura: this.raio * 2
            }
        ]
    }

    colidiuCom(sprite) {
        if (this.x < sprite.x) {
            this.velo_x = -Math.abs(this.velo_x)
        } else {
            this.velo_x = Math.abs(this.velo_x)
        }

        if (this.y < sprite.y) {
            this.velo_y = -Math.abs(this.velo_y)
        } else {
            this.velo_y = Math.abs(this.velo_y)
        }
    }

    atualizar() {
        if (this.x < this.raio || this.x > this.context.canvas.width - this.raio) {
            this.velo_x *= -1
        }

        if (this.y < this.raio || this.y > this.context.canvas.height - this.raio) {
            this.velo_y *= -1
        }
        
        this.x += this.velo_x
        this.y += this.velo_y
    }

    desenhar() {
        let context = this.context
        context.save()
        context.fillStyle = this.cor
        context.beginPath()
        context.arc(this.x, this.y, this.raio, Math.PI * 2, false)
        context.fill()
        context.restore()
    }
}