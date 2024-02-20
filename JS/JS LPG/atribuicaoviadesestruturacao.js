const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
const [um, , tres, , cinco, , sete ] = numeros; //pegando de 1 em 1, o ", ," define que nao tem nada
console.log(primeiroNumero,segundoNumero);
console.log(resto); // ..rest, ...spread

//                   0        1        2
//                 0 1 2    0 1 2   0 1 2
const numeros2 = [[1,2,3], [4,5,6],[7,8,9]]; //cada lista é um indice, e dentro de cada lista tem 3 indices
const [lista1, lista2, lista3] = numeros2; 


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco:{
        rua:'Av Brasil',
        numero: 320
    }
};

//atribuiçao via desestruturação
const { nome, idade } = pessoa; //irá pegar o nome e idade do objeto pessoa