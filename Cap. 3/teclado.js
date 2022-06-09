class Teclado {
    constructor(elem) {
        this.elem = elem
        this.pressionadas = []
        let teclado = this

        elem.addEventListener('keydown', (e) => {
            teclado.pressionadas[e.key] = true
        })

        elem.addEventListener('keyup', (e) => {
            teclado.pressionadas[e.key] = false
        })
    }

    pressionada(tecla) {
        return this.pressionadas[tecla]
    }

    disparou(espaco) {
        heroi.atirar()
    }
}