const alunos = ['Luiz', 'Maria', 'João', 'Leonardo'];
alunos[3] = 'jubileu'




alunos.unshift('Luiza') //adicionar um elemento no começo da lista
alunos.push('eduardo') // adicionar um elemento no final da lista

alunos.pop() // remove o ultimo elemento
alunos.shift() // remove do começo

console.log(alunos)
console.log(alunos instanceof Array) // descobrir se é uma Array