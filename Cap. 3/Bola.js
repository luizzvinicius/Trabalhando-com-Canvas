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

    atualizar() {
        let canvas = this.context.canvas

        if (this.x < this.raio || this.x > canvas.width - this.raio) {
            this.velo_x *= -1
        }
        
        if (this.y < this.raio || this.y > canvas.height - this.raio) {
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