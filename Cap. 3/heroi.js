'use strict'
let DIRECAO_ESQUERDA = 1;
let DIRECAO_DIREITA = 2;

class Heroi {
  constructor(ctx, teclado, animacao) {
    this.ctx = ctx
    this.teclado = teclado
    this.animacao = animacao
    this.posX = 0
    this.posY = 70
    this.tam = 25
    this.alt = 50
    this.direcao = DIRECAO_DIREITA
  }

  atualizar() {
    if (this.teclado.pressionada(SETA_ESQUERDA) && this.posX >= 10) {
      this.direcao = DIRECAO_ESQUERDA
      this.posX -= 10
    } else if (this.teclado.pressionada(SETA_DIREITA) && this.posX < ctx.canvas.width - this.tam) {
      this.direcao = DIRECAO_DIREITA
      this.posX += 10
    } else if (this.teclado.pressionada(SETA_BAIXO) && this.posY < this.ctx.canvas.height - this.alt) {
      this.posY += 10
    } else if (this.teclado.pressionada(SETA_CIMA) && this.posY >= 10) {
      this.posY -= 10
    }
  }

  atirar() {
    let tiro = new Bola(this.ctx)
    tiro.x = this.posX + 10
    tiro.y = this.posY + 10
    tiro.raio = 5
    tiro.velo_x = 7

    if (this.direcao == DIRECAO_ESQUERDA) {
      tiro.velo_x = -20
    } else if (this.direcao == DIRECAO_DIREITA) {
      tiro.velo_x = 20
    }

    this.animacao.novoSprite(tiro)
  }

  desenhar() {
    this.ctx.fillRect(this.posX, this.posY, this.tam, this.alt)
  }
}