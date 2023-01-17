//Declaração de função (Function hoisting)
function falaOi() {
    console.log('oi.');
};

//First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

//Dentro de um objeto
const obj = {
    fala() {
        console.log('Estou falando')
    }
}


//------------------------------------------------------------------

