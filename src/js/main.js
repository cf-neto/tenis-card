import { inicializarEventos, inicializarEventosNumeracao, adicionarClasse, getValorAtual, getValorAtualBtn, corValue, corValueDict, numeracao, numeracaoValueDict } from "./events.js";
    

// Adicionar eventos
document.addEventListener('DOMContentLoaded', () => {
  inicializarEventos(corValue, corValueDict, getValorAtual);
  inicializarEventosNumeracao(numeracao, numeracaoValueDict, getValorAtualBtn);
  adicionarClasse();
});

