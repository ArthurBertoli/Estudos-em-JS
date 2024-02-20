//aula 8
let numero = prompt('Digite um número: ');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número -2 é ${numero - 2}. <p>`;
texto.innerHTML += `<p>A raiz quadrada do seu número é ${numero ** 0.5}. <p>`;
texto.innerHTML += `<p> ${numero} é inteiro? ${Number.isInteger(numero)}. <p>`;
texto.innerHTML += `<p> ${numero} é NaN? ${Number.isNaN(numero)}. <p>`;
texto.innerHTML += `<p> ${numero} arredondado pra baixo: ${Math.floor(numero)}. <p>`;
texto.innerHTML += `<p> ${numero} arredondado pra cima: ${Math.ceil(numero)}. <p>`;
texto.innerHTML += `<p> ${numero} com duas casas decimais: ${numero.toFixed(2)}. <p>`;

//aula 9
const alunos = ['Luiz', 'Rodrigo', 'Pedro']; //array
const removido = alunos.pop(); //remove o ultimo
const removido2 = alunos.shift() // remove o primeiro
delete alunos[1]; //deleta na posição 1
console.log(removido);

alunos.unshift('Fabio') //adiciona no inicio
alunos.push('Ana'); //adiciona no fim

//aula 10
function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
}
saudacao('Luiz');

function soma(x, y){
    return x + y;
}
const somaF = soma();
console.log(somaF);

const raizq = function (n) {
    return n ** 0.5;
};
console.log(raizq(16));

const raizqq = n => n ** 0.5;

//aula 11
function criaPessoa (nome3, sobrenome, idade){
    return { nome3, sobrenome, idade };  //objeto
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Ana', 'Carol', 40);
const pessoa3 = criaPessoa('Matheus', 'Oliveira', 33);

const pessoa4 = {
    nome2: 'Luiz',
    sobrenome2: 'Miranda',
    idade2: 25,
    
    fala(){
        console.log(`${this.nome2} ${this.sobrenome2} esta falando oi`);
    }
};

pessoa4.fala();












