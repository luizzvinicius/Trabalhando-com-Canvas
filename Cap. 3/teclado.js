class Teclado {
    constructor(elem) {
        this.elem = elem
        this.pressionadas = []

        elem.addEventListener('keydown', (e) => {
            this.pressionadas[e.key] = true
            console.log(e.key)
        })

        elem.addEventListener('keyup', (e) => {
            this.pressionadas[e.key] = false
        })
    }

    pressionada(tecla) {
        return this.pressionadas[tecla]
    }

    // disparou(espaco) {
    //     heroi.atirar()
    // }
}