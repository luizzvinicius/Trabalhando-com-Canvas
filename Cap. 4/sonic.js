'use strict'
let sonic_direita = 1
let sonic_esquerda = 2

class Sonic {
    constructor(context, teclado, imgSonic) {
        this.context = context
        this.teclado = teclado
        this.x = 0
        this.y = 0
        this.velocidade = 5

        this.sheet = new SpriteSheet(this.context, imgSonic, 3, 8)
        this.sheet.intervalo = 60
        this.andando = false
        this.direcao = sonic_direita
    }

    atualizar() {
        if (this.teclado.pressionada(SETA_DIREITA)) {
            this.andando = true
            this.direcao = sonic_direita
            this.sheet.proximoQuadro()
            this.x += this.velocidade
            if (!this.andando || this.direcao != sonic_direita) {
                this.sheet.linha = 1
                this.sheet.coluna = 0
            }
        } else if (this.teclado.pressionada(SETA_ESQUERDA)) {
            if (!this.andando || this.direcao != sonic_esquerda) {
                this.sheet.linha = 2
                this.sheet.coluna = 0
            }

            this.andando = true
            this.direcao = sonic_esquerda
            this.sheet.proximoQuadro()
            this.x -= this.velocidade
        } else {
            if (this.direcao == sonic_direita) {
                this.sheet.coluna = 0
            } else if (this.direcao == sonic_esquerda) {
                this.sheet.coluna = 1
            }

            this.sheet.linha = 0
            this.andando = false
        }
    }

    desenhar() {
        this.sheet.desenhar(this.x, this.y)
    }
}