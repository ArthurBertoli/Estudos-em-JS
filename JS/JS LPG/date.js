const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras);

const data2 = new Date(2019,3,20,15,14,27); // 20/04/2019 15:14:27  | ano/mes/dia/hora/minuto/segundo

const data3 = new Date('2019-04-20 20:30');  //setando a data pro string, o espaço marca onde começa as horas
console.log(data.toString());
