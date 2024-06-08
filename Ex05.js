/*
**Cálculo de Desconto**

Você foi contratado para desenvolver um programa que calcule o preço final de um produto após aplicação de um desconto. O preço original do produto é de R$ 100,00 e o desconto que semppre será aplicado é de 20%.

Escreva um programa em JavaScript que realize os seguintes passos:

1. Declare uma variável let com o nome `precoOriginal` e atribua a ela o valor de 100 (representando o preço original do produto em reais).
2. Declare uma constante com o nome `desconto` e atribua a ela o valor de 20 (representando a porcentagem de desconto a ser aplicada).
3. Declare uma variável let com o nome `valorDesconto` e calcule o valor do desconto em porcentagem.
4. Declare uma variável let com o nome `precoFinal` e calcule o preço final do produto subtraindo o valor do `precoOriginal` do `desconto`.
5. Imprima no console a seguinte mensagem: "O preço final do produto com desconto é: ?? ".*/


/*
obs: O método toFixed() é usado para formatar um número com uma quantidade específica de casas decimais e retorna uma string representando esse número. Aqui está uma explicação mais detalhada:

Sintaxe: numero.toFixed(numeroDeCasasDecimais)
numero: O número que você deseja formatar.
numeroDeCasasDecimais: O número de casas decimais que você deseja.
Retorno: toFixed() retorna uma string representando o número, com o número especificado de casas decimais. Se necessário, o número será arredondado para se ajustar ao número especificado de casas decimais.*/

let precoOriginal = 100;
const desconto = 20;
let valorDesconto = (desconto / 100) * precoOriginal;
let precoFinal = precoOriginal- valorDesconto
console.log("O preço final do produto com desconto é R$:",precoFinal.toFixed(2));

