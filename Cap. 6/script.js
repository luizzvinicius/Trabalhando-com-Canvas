'use strict'
const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')

const teclado = new Teclado(document)
const animacao = new Animacao(ctx)

const imgEspaco = new Image()
const imgEstrelas = new Image()
const imgNuvens = new Image()
const imgNave = new Image()

imgEspaco.setAttribute('src', 'fundo-espaco.png')
imgEstrelas.setAttribute('src', 'fundo-estrelas.png')
imgNuvens.setAttribute('src', 'fundo-nuvens.png')
imgNave.setAttribute('src', 'nave.png')

const imagens = [imgEspaco, imgEstrelas, imgNuvens, imgNave]
imagens.forEach(imagem => imagem.addEventListener('load', iniciar))

function iniciar() {
    let fundoEspaco = new Fundo(ctx, imgEspaco)
    let fundoEstrelas = new Fundo(ctx, imgEstrelas)
    let fundoNuvens = new Fundo(ctx, imgNuvens)
    let nave = new Nave(ctx, teclado, imgNave)

    fundoEspaco.speed = 1
    fundoEstrelas.speed = 3
    fundoNuvens.speed = 2

    nave.x = canvas.width / 2 - imgNave.width / 2
    nave.y = canvas.height - imgNave.height
    nave.speed = 5

    let fundos = [fundoEspaco, fundoEstrelas, fundoNuvens, nave]
    fundos.forEach(fundo => animacao.novoSprite(fundo))
    
    teclado.disparou(ESPACO, () => nave.atirar())
}

animacao.ligar()