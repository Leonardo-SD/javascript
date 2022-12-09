let varA = 'a'
let varB = 'b'
let varC = 'c'

const varaTemp = varA
varA = varB
varB = varC
varC = varaTemp

console.log(varA, varB, varC)

