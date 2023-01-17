// Função construtora -> sempre inicia o nome com a letra 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo')
    };
}

const pessoa1 = new Pessoa('Luiz', 'Otávio');
console.log(pessoa1)
