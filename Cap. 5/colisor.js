'use strict'
class Colisor {
    constructor() {
        this.sprites = []
        this.aoColidir = null
    }

    processar() { // testar todos os sprites se colidiram
        let jaTestados = new Object()

        for (let i in this.sprites) {
            for (let j in this.sprites) {
                if (i == j) continue // não ser o mesmo sprite

                let id1 = this.stringUnica(this.sprites[i])
                let id2 = this.stringUnica(this.sprites[j])

                if (!jaTestados[id1]) jaTestados[id1] = []
                if (!jaTestados[id2]) jaTestados[id2] = []

                if (!(jaTestados[id1].indexOf(id2) >= 0 || jaTestados[id2].indexOf(id1) >= 0)) {
                    this.testarColisao(this.sprites[i], this.sprites[j])

                    jaTestados[id1].push(id2)
                    jaTestados[id2].push(id1)
                }
            }
        }
    }

    stringUnica(sprite) {
        let str = ''
        var retangulos = sprite.retangulosColisao()

        for (let i in retangulos) {
            str += 'x: ' + retangulos[i].x + ',' +
                'y: ' + retangulos[i].y + ',' +
                'l: ' + retangulos[i].largura + ',' +
                'a: ' + retangulos[i].altura + '\n'
        }

        return str
    }

    testarColisao(sprite1, sprite2) {
        let rets1 = sprite1.retangulosColisao()
        let rets2 = sprite2.retangulosColisao()

        colisoes:
        for (let i in rets1) {
            for (let j in rets2) {
                if (this.retangulosColidem(rets1[i], rets2[j])) {
                    sprite1.colidiuCom(sprite2)
                    sprite2.colidiuCom(sprite1)

                    if (this.aoColidir) this.aoColidir(sprite1, sprite2)

                    break colisoes // não precisa verificar os outros retangulos
                }
            }
        }
    }

    retangulosColidem(ret1, ret2) {
        return (ret1.x + ret1.largura) > ret2.x &&
            ret1.x < (ret2.x + ret2.largura) &&
            (ret1.y + ret1.altura) > ret2.y &&
            ret1.y < (ret2.y + ret2.altura)
    }

    novoSprite(sprite) {
        this.sprites.push(sprite)
    }
}