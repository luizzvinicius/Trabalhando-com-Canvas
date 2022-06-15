'use strict'
let SETA_ESQUERDA = 37;
let SETA_DIREITA = 39;
let SETA_CIMA = 38;
let SETA_BAIXO = 40;
let ESPACO = 32;

class Teclado {
  constructor(elem) {
    this.elem = elem
    this.pressionadas = []
    this.disparadas = []
    this.funcoesDisparo = []

    elem.addEventListener('keydown', (e) => {
      let tecla = e.keyCode
      this.pressionadas[tecla] = true
      
      if (this.funcoesDisparo[tecla] && !this.disparadas[tecla]) {
        this.disparadas[tecla] = true
        this.funcoesDisparo[tecla] ()    
      }
    })

    elem.addEventListener('keyup', (e) => {
      this.pressionadas[e.keyCode] = false
      this.disparadas[e.keyCode] = false
    })
  }

  pressionada(tecla) {
    return this.pressionadas[tecla]
  }

  disparou(tecla, callback) {
    this.funcoesDisparo[tecla] = callback
  }
}