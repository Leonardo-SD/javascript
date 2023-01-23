const numeros = [5, 8, 9, 13, 46, 85, 15, 27, 30, 56, 49];
const numerosReduzidos = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador
}, 0);

console.log(numeros, numerosReduzidos)