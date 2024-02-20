//aula 1
console.log('oi');

//aula 2
let nome = 'João';
const primeiro = 5;
const segundo = 10;
const resultado= primeiro * segundo;

console.log(nome);
console.log(resultado);
console.log(typeof primeiro); //fala se é strng/number/etc...

//aula 3
const nome2 = 'luiz';
const sobrenome = 'gustavo';
const idade = 30;
const peso = 80;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(nome2, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de ', imc, '.', nome2, sobrenome, 'nasceu em ', anoNascimento);

//aula 4
alert('nossa mensagem'); //
confirm('certeza?'); //retorna uma caixa de msg 
prompt('digite um numero'); //

let num1 = prompt('Digite o numero 1');
let num2 = prompt('Digite o numero 2');

num1 = Number(num1);
num2 = Number(num2);
const resultado2 = num1 + num2;
alert('O resultado da sua conta foi:', + resultado2);

//aula 5 
let varA = 'A'; //b
let varB = 'B'; //c
let varC = 'C'; //a

const varTemp = varA;

varC = varB;
varA = varC;
varB = varTemp;

[varA, varB, varC] = [varB, varC, varA]; 

console.log(varA, varB, varC)

//aula 6
let string1 = "o rato roeu a roupa do rei de roma";

console.log(string1.toUpperCase);
console.log(string1.toLowerCase);

//aula 7
let num3 = 1;
let num4 = 2.5;

console.log(num3.toString() + num4.toString());
let temp = num3 * 'Ola';
console.log(Number.isNaN(temp));









