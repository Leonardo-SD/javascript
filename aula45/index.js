// try {
//     // É executado quando não há erros
// } catch (e) {
//     // É executado quando há erros
// } finally {
//     // Sempre será executado
// }

function retordaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR');
}

try {
const data = new Date('01-01-1970 12:58:12');
const hora = retordaHora();
console.log(hora);
} catch {

}finally {
    console.log('tenha um bom dia!')
}
