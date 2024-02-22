// --> Exercício 8. Crie uma variável para receber uma senha e atribua a ela uma string.


// Armazena o valor de uma senha em uma variável chamada "password";
const password = '12345678Aa@';

// --> a. Use uma estrutura condicional para verificar se a senha atende aos critérios de complexidade, como ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial. Imprima mensagens apropriadas para cada cenário.
// Verifica se o tamanho o valor da variável é menor que 8 utilizando length.
if (password.length < 8) {
  console.log(`Senha não atende ao requisito: Ter pelo menos 8 caracteres.`);
}
// Verifica se a senha não possui letra maiúscula utilizando regex.
else if (!/[A-Z]/.test(password)) {
  console.log(`Senha não atende ao requisito: Ter pelo menos uma letra maiúscula.`);
}
// Verifica se a senha não possui letra minúscula utilizando regex.
else if (!/[a-z]/.test(password)) {
  console.log(`Senha não atende ao requisito: Ter pelo menos uma letra minúscula.`);
}
// Verifica se a senha não possui algum caractere especial utilizando regex.
else if (!/[@#$%^&+=]/.test(password)) {
  console.log(`Senha não atende ao requisito: Ter pelo menos um caractere especial (@#$%^&+=).`);
}
// Não entrou em nenhuma condição anterior
else {
  console.log(`Senha válida.`);
}
