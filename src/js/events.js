export const corValue = document.getElementById('cor');

export const corValueDict = {
  bege: 'bege',
  branco: 'branco',
  marinho: 'marinho',
  grafite: 'grafite',
  marrom: 'marrom'
};

export const bege = document.getElementById('DivBege');
export const branco = document.getElementById('DivBranco');
export const marinho = document.getElementById('DivMarinho');
export const marrom = document.getElementById('DivMarrom');
export const grafite = document.getElementById('DivGrafite');

bege.classList.add('active');


// Variável do span para mudar cor
export let valorAtual = corValue.textContent ='bege';

export const _cores = ['bege', 'branco', 'marinho', 'marrom', 'grafite'];
export const _numeros = ['btn38', 'btn39', 'btn40', 'btn41', 'btn42'];

export function getValorAtual() {
  return valorAtual;
};

export function getValorAtualBtn() {
  return valorAtualbtn;
};


export const numeracaoValueDict = {
  btn38: '38',
  btn39: '39',
  btn40: '40',
  btn41: '41',
  btn42: '42'
};

export const btn38 = document.getElementById('btn38');
export const btn39 = document.getElementById('btn39');
export const btn40 = document.getElementById('btn40');
export const btn41 = document.getElementById('btn41');
export const btn42 = document.getElementById('btn42');
export const numeracao = document.getElementById('numeracao');
export let valorAtualbtn = numeracao.textContent = '38';

btn38.classList.add('active');


// VARIAVÉIS
const elementos = [bege, branco, marinho, marrom, grafite];
const numeros = [btn38, btn39, btn40, btn41, btn42];


// FUNÇÕES

function removerClasseElementos() {elementos.forEach(el => el.classList.remove('active'));}

function removerClasseNumeros() {numeros.forEach(el => el.classList.remove('active'));}

function atualizarImagem(base){
  let imageId = document.getElementById('imgId');

  if(!imageId){
    console.error('Elemento não encontrado!');
  }

  imageId.src = `src/img/${base}.jpg`; 
}

export function adicionarClasse() {


  // 2. Verificação de elementos (debug)
  if (!valorAtual) console.error('Elemento #cor não encontrado no DOM!');

  _cores.forEach(cor => {
    const elemento = document.getElementById(`Div${cor.charAt(0).toUpperCase() + cor.slice(1)}`);
    if (elemento) {
      elemento.addEventListener('click', () => {
        removerClasseElementos();
        elemento.classList.add('active');
        corValue.textContent = cor;
        valorAtual = cor;
        atualizarImagem(cor);
      });
    }
  });

  numeros.forEach(elemento => {
    if (elemento) {
      elemento.addEventListener('click', () => {
        removerClasseNumeros();
        const id = elemento.id;
        elemento.classList.add('active');
        numeracao.textContent = numeracaoValueDict[id];
        valorAtualbtn = numeracaoValueDict[id];
      });
    }
  });
}

// Função que adiciona evento para um elemento com troca de texto
export function adicionarEventos(elemento, loc, valorMudado, getValorAtual) {
  elemento.addEventListener('mouseenter', () => {
    loc.textContent = valorMudado;
  });

  elemento.addEventListener('mouseleave', () => {
    loc.textContent = getValorAtual();
  });
}

// Função que mapeia as divs e chama adicionarEventos automaticamente
export function inicializarEventos(loc, corValueDict, getValorAtual) {
  for (const [cor, valor] of Object.entries(corValueDict)) {
    const elemento = document.getElementById(`Div${cor.charAt(0).toUpperCase() + cor.slice(1)}`);
    if (elemento) {
      adicionarEventos(elemento, loc, valor, getValorAtual);
    }
  }
}

// Função que inicializa eventos para os botões de numeração
export function inicializarEventosNumeracao(loc, numeracaoValueDict, getValorAtualBtn) {
  for (const [btnId, valor] of Object.entries(numeracaoValueDict)) {
    const elemento = document.getElementById(btnId);
    if (elemento) {
      adicionarEventos(elemento, loc, valor, getValorAtualBtn);
    }
  }
}

