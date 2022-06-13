'use strict'
class Teclado {
  constructor(elem) {
    this.elem = elem
    this.pressionadas = []
    this.disparadas = []
    this.funcoesDisparo = []

    elem.addEventListener('keydown', (e) => {
      this.pressionadas[e.key] = true
      //console.log(e.key)

      if (this.funcoesDisparo[e.key] && !this.disparadas[e.key]) {
        this.disparadas[e.key] = true
        this.funcoesDisparo[e.key]()
      }

    })

    elem.addEventListener('keyup', (e) => {
      this.pressionadas[e.key] = false
      this.disparadas[e.key] = false
    })
  }

  pressionada(tecla) {
    return this.pressionadas[tecla]
  }

  disparou(codigoTecla) {
    return this.funcoesDisparo[codigoTecla]
  }
}

//t no lugar de espaço