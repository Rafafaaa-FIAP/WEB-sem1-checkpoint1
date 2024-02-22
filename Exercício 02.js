// --> Exercício 2. Crie uma variável e atribua a ela um valor numérico.

// Armazena o valor em uma variável chamada "number".
const number = 15;

// --> a. Escreva uma estrutura condicional que verifica se o número é múltiplo de 5 e imprima uma mensagem correspondente.
// Verifica se o número é múltiplo de 5 utilizando o operador % (resto da divisão).
// Se o resto da divisão entre o número e 5 for igual a 0, é múltiplo.
if (number % 5 === 0) {
  // Imprime a mensagem do número se for múltiplo de 5.
  console.log(`O número ${number} é múltiplo de 5.`);
}
else {
  // Imprime a mensagem do número se não for múltiplo de 5.
  console.log(`O número ${number} não é múltiplo de 5.`);
}
