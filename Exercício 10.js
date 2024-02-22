// --> Exercício 10. Crie uma variável e atribua a ela uma string contendo um dia da semana.

// Armazena o valor em uma variável chamada "dayWeek";
const dayWeek = 'sexta-feira';

// --> a. Use uma estrutura condicional para verificar se é um dia útil (segunda a sexta-feira) ou um fim de semana (sábado ou domingo) e imprima uma mensagem correspondente.
// Verifica se é um dia útil ou não e imprime a mensagem correspondente.
if (dayWeek === 'Domingo' || dayWeek === 'Sábado') {
  console.log(`${dayWeek} não é um dia útil.`);
}
else {
  console.log(`${dayWeek} é um dia útil.`);
}
