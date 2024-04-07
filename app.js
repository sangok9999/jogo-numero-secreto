let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let numeroLimite = 10;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 4');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número. Aperte F5 para jogar novamente');
            } else {
                    if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número correto é menor');
                    } else {
                        exibirTextoNaTela('p', 'O número correto é maior');
                    }
            }
}

function gerarNumeroAleatorio() {
  let NumeroEscolhido = parseInt(Math.random() *4 + 1);
  let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == 5) {
    listaNumerosSorteados = [];
  }

  if (listaNumerosSorteados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio();

  } else {
    listaNumerosSorteados.push(NumeroEscolhido);
    return NumeroEscolhido;
  }
}