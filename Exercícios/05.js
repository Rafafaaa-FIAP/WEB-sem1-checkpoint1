// --> Exercício 5. Crie uma variável e atribua a ela um número inteiro.

// Armazena o valor em uma variável chamada "number".
const number = 5;

// --> a. Escreva uma estrutura condicional que verifica se o número é um quadrado perfeito (ou seja, se sua raiz quadrada é um número inteiro) e imprima uma mensagem correspondente.

// Verifica se o número é um quadrado perfeito utilizando a função Math.sqrt() para realizar a raíz quadrada.
if (Math.sqrt(number) % 1 === 0) {
    console.log(`${number} é um quadrado perfeito.`);
} else {
    console.log(`${number} não é um quadrado perfeito.`);
}
