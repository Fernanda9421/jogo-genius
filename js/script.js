let ordem = [];
let ordemClique = [];
let pontos = 0;


const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');
const vermelho = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');

let ordemAleatoria = () => {
    let ordemCor = Math.floor (Math.random() * 4);
    ordem[ordem.length] = ordemCor;
    ordemClique = [];

    for (let i in ordem) {
        let elementoCor = criarElementoCor (ordem[i]);
        acendeCor (elementoCor, Number(i) + 1);
    }
}

let acendeCor = (element, number) => {
    number = number * 500;
    setTimeout (() => {
        element.classList.add('selecionado');
    }, number - 250);
    setTimeout (() => {
        element.classList.remove('selecionado');
    });
}

let checagemOrdem = () => {
    for (let i in ordemClique) {
        if (ordemClique[i] != ordem[i]) {
            fimJogo();
            break;
        }
    }
    if(ordemClique.length == ordem.length) {
        alert (`Pontuação: ${pontos}\n Você acertou! Iniciando próximo nível`);
        proximoNivel();
    }
}

let clique = (cor) => {
    ordemClique[ordemClique.length] = cor;
    criarElementoCor(cor).classList.add('selecionado');

    setTimeout (() => {
        criarElementoCor(cor).classList.remove('selecionado');
        checagemOrdem();
    }, 250);
}

let criarElementoCor = (cor) => {
    if (cor == 0) {
        return verde;
    } else if (cor == 1){
        return vermelho;
    } else if (cor == 2) {
        return amarelo;
    } else if (cor == 3) {
        return azul;
    }
}

let proximoNivel = () => {
    pontos++;
    ordemAleatoria();
}

let fimJogo = () => {
    alert (`Pontuação: ${pontos}!\n Você perdeu o jogo!\n Clique em OK para recomeçar`);
    ordem = [];
    ordemClique = [];

    inicioJogo();
}

let inicioJogo = () => {
    alert ('Bem vindo ao Gênesis! Iniciando novo jogo!');
    pontos = 0;

    proximoNivel();
}

verde.onclick = () => clique(0);
vermelho.onclick = () => clique(1);
amarelo.onclick = () => clique(2);
azul.onclick = () => clique(3);

inicioJogo ();