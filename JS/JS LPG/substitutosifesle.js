//? :  ->serve para substituir if else.

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // Se o usuario nao escolher cor, vai direcionar a preta

