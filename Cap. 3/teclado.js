class Teclado {
  constructor(elem) {
    this.elem = elem
    this.pressionadas = []
    this.disparadas = []
    this.funcoesDisparo = []

    elem.addEventListener('keydown', (e) => {
      this.pressionadas[e.key] = true

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

  disparou(tecla, callback) {
    this.funcoesDisparo[tecla] = callback
  }
}