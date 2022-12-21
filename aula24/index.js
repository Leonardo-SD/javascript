/*
- If pode ser usado sozinho
- Sempre que ultilizo a palavra else, preciso ter usado um if abtes
- Eu posso ter vários else if na checagem
- Só posso ter um else na checagem

*/


const hora = 40 ;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Olá')
}

