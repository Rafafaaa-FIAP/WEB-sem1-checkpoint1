// --> Exercício 4. Crie uma variável e peça para o usuário atribuir a ela uma nota de 0 a 100.

// Armazena o valor em uma variável chamada "number".
const number = 50;

// --> a. Valide se o usuário digitou um número dentro desse intervalo.
// Verifica se o número está entre 0 e 100.
// Se for maior ou igual a 0 e menor ou igual a 100, está correto, caso contrário, não está entre 0 e 100.
if (number >= 0 && number <= 100) {
  // --> b. Escreva uma estrutura condicional que atribua uma nota em conceito (A, B, C, D ou F) com base na faixa em que a nota se encontra.
  // Faz uma sequência de verificações para verificar qual o conceito seguindo as seguintes regras.
  // Atribuição conceito -> intervalo de nota
  // A - De 81 a 100
  // B - De 61 a 80
  // C - De 41 a 60
  // D - De 21 a 40
  // F - De 0 a 20
  if (number >= 0 && number <= 20) {
    console.log('Conceito F');
  }
  else if (number >= 21 && number <= 40) {
    console.log('Conceito D');
  }
  else if (number >= 41 && number <= 60) {
    console.log('Conceito C');
  }
  else if (number >= 61 && number <= 80) {
    console.log('Conceito B');
  }
  else {
    console.log('Conceito A');
  }
}
else {
  // Imprime a mensagem de que a nota não está entre 0 e 100.
  console.log(`A nota ${number} não está entre 0 e 100.`);
}
