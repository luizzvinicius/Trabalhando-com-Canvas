class Heroi {
  constructor(ctx, teclado, animacao) {
    this.ctx = ctx
    this.teclado = teclado
    this.animacao = animacao
    this.posX = 0
    this.posY = 70
    this.tam = 25
    this.alt = 50
    this.direcao = 2
  }

  desenhar() {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillRect(this.posX, this.posY, this.tam, this.alt)
  }

  atualizar() { // esquerda 1 e direita 2
    if (this.teclado.pressionada("ArrowLeft") && this.posX >= 10) {
      this.direcao = 1
      this.posX -= 10
    } else if (this.teclado.pressionada("ArrowRight") && this.posX < ctx.canvas.width - this.tam) {
      this.direcao = 2
      this.posX += 10
    }
  }

  atirar() {
    let tiro = new Bola(this.ctx)
    tiro.x = this.x + 10
    tiro.y = this.y + 10
    tiro.raio = 5
    tiro.cor = 'red'

    if (this.direcao == 1) {
      tiro.velo_x = -20
    } else if (this.direcao == 2) {
      tiro.velo_x = 20
    }

    this.animacao.novoSprite(tiro)
  }
}