const data = new Date();

const dia = data.getDate()
const mes = data.getMonth()
const ano = data.getFullYear()
const diaSemana = data.getDay()
const hora = zeroEsquerda(data.getHours())
const minuto = zeroEsquerda(data.getMinutes())


function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}


let diaSemanaTexto;
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;
}

let mesTexto;
switch (mes) {
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 1:
        mesTexto = 'Fevereiro';
        break;
    case 2:
        mesTexto = 'Março';
        break;
    case 3:
        mesTexto = 'Abril';
        break;
    case 4:
        mesTexto = 'Maio';
        break;
    case 5:
        mesTexto = 'Junho';
        break;
    case 6:
        mesTexto = 'Julho';
        break;
    case 7:
        mesTexto = 'Agosto';
        break;
    case 8:
        mesTexto = 'Setembro';
        break;
    case 9:
        mesTexto = 'Outubro';
        break;
    case 10:
        mesTexto = 'Novembro';
        break;
    case 11:
        mesTexto = 'Dezembro';
        break;
}

const msg = document.querySelector('.container h1');
msg.innerHTML = '';
const p = document.createElement('p');
p.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} <br>${hora}:${minuto}`
msg.appendChild(p);


// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});