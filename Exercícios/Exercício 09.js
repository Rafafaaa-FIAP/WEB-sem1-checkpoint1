// --> Exercício 9. Declare três variáveis, duas para receber números e uma para receber o operador aritmético (+, -, *, /).

// Armazena o valor de três variáveis, duas para receber números ("number1" e "number2") e uma para receber o operador aritmético (+, -, *, /) ("operator");
const number1 = 2;
const number2 = 3;
const operator = '/';

// --> a. Use uma estrutura condicional para realizar a operação especificada pela variável de operador com os números digitados e retorne o resultado correto.
// Sequência de verificações para verificar qual a operação que irá realizar e imprime a operação.
if (operator === '+') {
  console.log(`${number1} ${operator} ${number2} = ${number1 + number2}`);
}
else if (operator === '-') {
  console.log(`${number1} ${operator} ${number2} = ${number1 - number2}`);
}
else if (operator === '*') {
  console.log(`${number1} ${operator} ${number2} = ${number1 * number2}`);
}
else if (operator === '/') {
  console.log(`${number1} ${operator} ${number2} = ${number1 / number2}`);
}
