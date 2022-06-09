// const canvas = document.querySelector('#canvas1')
// const ctx = canvas.getContext('2d')

// let x = 130
// let tam = 20

// desenharPersonagem()

// document.addEventListener('keydown', (e) => {
//     if (e.key == "ArrowLeft") {
//         if (x <= 0) return
//         x -= 10
//     } else if (e.key == "ArrowRight") {
//         if (x >= canvas.width - tam) return
//         x += 10
//     }

//     desenharPersonagem()
// })

// function desenharPersonagem() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.fillRect(x, 100, tam, 20)
// }

// Melhorando o exemplo anterior

const canvas2 = document.querySelector('#canvas2')
const ctx2 = canvas2.getContext('2d')

let pos = 0
let tam2 = 20
let teclado = new Teclado(document)

desenharPersonagem2()

requestAnimationFrame(animar)
function animar() {
    if (teclado.pressionada("ArrowLeft")) {
        //if (pos <= 0) return
        pos -= 10
    } else if (teclado.pressionada("ArrowRight")) {
        //if (pos >= canvas2.width - tam2) return
        pos += 10
    }

    desenharPersonagem2()
    requestAnimationFrame(animar)
}

function desenharPersonagem2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
    ctx2.fillRect(pos, 80, tam2, 50)
}

// parte 2

teclado.disparou(espaco)