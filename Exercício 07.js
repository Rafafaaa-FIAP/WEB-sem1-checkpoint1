// --> Exercício 7. Declare uma variável e atribua a ela uma string com o nome de um país.

// Armazena o valor em uma variável chamada "country";
const country = 'Brasil';

// --> a. Use uma estrutura condicional para verificar se o país é um dos BRICS (Brasil, Rússia, Índia, China, África do Sul) e imprima uma mensagem apropriada.
// Verifica se o país BRICS (Brasil, Rússia, Índia, China, África do Sul) utilizando uma lista com todos os países do BRICS e utiliza a função some() para verificar se o país da variável "country" é algum dos que estão na lista.
if (['Brasil', 'Rússia', 'Índia', 'China', 'África do Sul'].some(x => x === country)) {
  console.log(`O país ${country} faz parte dos BRICS.`);
}
else {
  console.log(`O país ${country} não faz parte dos BRICS.`);
}
