function meuEscopo(){
    
    const form = document.querySelector('.form');   //selecionando pela classe ali no html "form"
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    form.onsubmit = function (evento){
        evento.preventDefault();
        const nome = form.nome.querySelector('.nome');
        const sobrenome = form.sobrenome.querySelector('.sobrenome');
        const peso = form.peso.querySelector('.peso');
        const altura = form.altura.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
    };
}