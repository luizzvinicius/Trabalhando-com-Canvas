'use strict'
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let teclado = new Teclado(document)
let animacao = new Animacao(ctx)
let hero = new Heroi(ctx, teclado, animacao)
hero.posX = 0
hero.posY = 10
hero.tam = 40

animacao.novoSprite(hero)

teclado.disparou(ESPACO, () => {hero.atirar()} )

animacao.ligar()