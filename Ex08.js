/*Escolha uma bebida com base na temperatura ambiente.

- Se a temperatura estiver acima de 30°C, recomenda-se uma limonada gelada.
- Se a temperatura estiver entre 20°C e 30°C (inclusive), recomenda-se um suco natural.
- Se a temperatura estiver abaixo de 20°C, recomenda-se um chocolate quente.

Escreva um programa em JavaScript que:
1. Receba a temperatura atual como entrada.
2. Utilize a estrutura de controle `if`, `else if` e `else` para determinar a bebida recomendada com base na temperatura fornecida.
3. Imprima uma mensagem indicando a bebida recomendada no console.*/

let temperatura= 19;
if(temperatura>30){
    console.log("recomenda-se uma limonada gelada.");
} else if (temperatura >= 20 && temperatura <=30){
    console.log("recomenda-se um suco natural.");
} else {
    console.log ("recomenda-se um chocolate quente.");
}

