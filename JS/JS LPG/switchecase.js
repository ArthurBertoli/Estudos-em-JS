//Usando switch case
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default :
            diaSemanaTexto = '';
            return diaSemanaTexto
    }
}

function getNomeMes(numeroMes){
    let numeroMesTexto;

    switch(numeroMes){
        case 0:
            numeroMesTexto = 'Janeiro';
            return numeroMesTexto;
        case 1:
            numeroMesTexto = 'Fevereiro';
            return numeroMesTexto;
        case 2:
            numeroMesTexto = 'Março';
            return numeroMesTexto;
        case 3:
            numeroMesTexto = 'Abril';
            return numeroMesTexto;
        case 4:
            numeroMesTexto = 'Maio';
            return numeroMesTexto;
        case 5:
            numeroMesTexto = 'Junho';
            return numeroMesTexto;
        case 6:
            numeroMesTexto = 'Julho';
            return numeroMesTexto;
        case 7:
            numeroMesTexto = 'Agosto';
            return numeroMesTexto;
        case 8:
            numeroMesTexto = 'Setembro';
            return numeroMesTexto;
        case 9:
            numeroMesTexto = 'Outubro';
            return numeroMesTexto;
        case 10:
            numeroMesTexto = 'Novembro';
            return numeroMesTexto;
        case 11:
            numeroMesTexto = 'Dezembro';
            return numeroMesTexto;
        default:
            numeroMesTexto = '';
            return numeroMesTexto;
    }
}

function criaData (data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} + de ${data.getFullYear()} ${data.getMinutes()}`
}

h1.innerHTML = criaData(data);

//Agora usando a documentação do js:

const h1 = document.querySelector('.container h1');
const data2 = new Date();
const opcoes = { dateStyle: 'full', timeStyle: 'short' };

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);