// --> Exercício 3. Crie uma variável e peça para o usuário atribuir a ela um valor de 1 a 12, representando um mês do ano.

// Armazena o valor em uma variável chamada "number".
const number = 9;

// --> a. Valide se o usuário digitou um número de 1 a 12.
// Verifica se o número está entre 1 e 12.
// Se for maior ou igual a 1 e menor ou igual a 12, está correto, caso contrário, não está entre 1 e 12.
if (number >= 1 && number <= 12) {
  // --> b. Escreva uma estrutura condicional que imprima a estação do ano correspondente ao mês inserido (por exemplo, "Primavera" para março, abril e maio).
  // Faz uma sequência de verificações para verificar qual a estação que irá imprimir seguindo as seguintes regras.
  // Atribuição número -> mês
  // 1 - Janeiro
  // 2 - Fevereiro
  // 3 - Março
  // 4 - Abril
  // 5 - Maio
  // 6 - Junho
  // 7 - Julho
  // 8 - Agosto
  // 9 - Setembro
  // 10 - Outrubro
  // 11 - Novembro
  // 12 - Dezembro
  // Atribuição estação -> mês
  // Primavera - Março, Abril e Maio
  // Verão - Junho, Julho e Agosto
  // Outono - Setembro, Outrubro e Novembro
  // Inverno - Dezembro, Janeiro e Fevereiro
  if (number >= 3 && number <= 5) {
    console.log('Primavera');
  }
  else if (number >= 6 && number <= 8) {
    console.log('Verão');
  }
  else if (number >= 9 && number <= 11) {
    console.log('Outono');
  }
  else {
    console.log('Inverno');
  }
}
else {
  // Imprime a mensagem de que o número não está entre 1 e 12.
  console.log(`O número ${number} não está entre 1 e 12.`);
}
