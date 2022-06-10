'use strict'
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let teclado = new Teclado(document)
let animacao = new Animacao(ctx)
let hero = new Heroi(ctx, teclado, animacao)
hero.x = 0
hero.y = 100


animacao.novoSprite(hero)
teclado.disparou("Space", hero.atirar())

animacao.ligar()