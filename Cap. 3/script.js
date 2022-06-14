'use strict'
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let animacao = new Animacao(ctx)
let teclado = new Teclado(document)
let hero = new Heroi(ctx, teclado, animacao)
hero.posX = 0
hero.posY = 10
hero.tam = 40

animacao.novoSprite(hero)
hero.atirar()
//teclado.disparou('ArrowUp')

animacao.ligar()