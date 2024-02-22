// --> Exercício 1. Crie uma variável e atribua a ela um valor numérico vindo do usuário.

// Armazena o valor em uma variável chamada "number".
const number = 13;

// --> a. Escreva uma estrutura condicional (if) que verifica se o número é par ou ímpar e imprima a respectiva mensagem.
// Verifica se o número é par ou ímpar utilizando o operador % (resto da divisão).
// Se o resto da divisão entre o número e 2 for igual a 0, é par, se não é ímpar.
if (number % 2 === 0) {
  // Imprime a mensagem do número se for par.
  console.log(`O número ${number} é um número par.`);
}
else {
  // Imprime a mensagem do número se for ímpar.
  console.log(`O número ${number} é um número ímpar.`);
}

// --> b. Refatore o exercício anterior usando o operador ternário.
// Operador ternário é um recurso de tomada de decisões que tem o mesmo objetivo do if / else, mas que é feito em apenas uma linha.
// Imprime a mensagem do número se ele é par ou ímpar.
console.log(`O número ${number} é um número ${ number % 2 === 0 ? 'par' : 'ímpar' }.`);
