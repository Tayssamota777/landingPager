
/*calcular o aumento salarial de um funcionário com base no salário atual. 

O programa deve seguir as seguintes regras:

- Se o salário for de até R$ 1000, o aumento é de 20%.
- Se o salário for maior que R$ 1000 e até R$ 3000, o aumento é de 15%.
- Se o salário for maior que R$ 3000, o aumento é de 10%.

Solicite ao usuário que digite seu salário atual. 
Em seguida, o programa calcula o aumento salarial de acordo com as regras acima e imprime o novo salário com aumento no console.

**Explicação do `parseFloat`:**
O `parseFloat` é uma função JavaScript que analisa um argumento string e retorna um número de ponto flutuante (float). No contexto deste programa, o `parseFloat` é usado para converter a entrada do usuário, que é uma string, em um número decimal. Isso é necessário para que possamos realizar operações matemáticas com o salário fornecido pelo usuário. */

let salario = parseFloat (prompt("Digite o seu salário"));
let aumentoSalario;

if (salario < 1000) {
    aumentoSalario = salario * 0,2;
} else if (salario > 1000 && salario <= 3000) {
    aumentoSalario = salario * 0,15;
} else {
    aumentoSalario = salario * 0,1;
}
let aumentoComSalario= salario+aumentoSalario;
let salarioComAumentoFormatado= aumentoSalario.
toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// formar como moeda - Brasil

console.log("O valor do novo salário é:", salarioComAumentoFormatado);

