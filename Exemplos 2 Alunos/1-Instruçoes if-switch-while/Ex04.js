/*
O loop while
O whileloop percorre um bloco de código enquanto uma condição especificada for verdadeira.

Sintaxe
while (condition) {
  // code block to be executed
}

*/

let valor = "";  //inicializa a variável vazia
let i = 0; //inicializa a variável com o valor 0

//loop while

while (i < 10) { //faça quando enquanto é verdadeiro
  // enquanto i for maior que 10 continuará

  valor += + i + "</br>";
  i++; //incrementa o valor de i em cada interação de loop

}

document.getElementById("numeros").innerHTML = valor;


/*
1.declare e inicialize a countvariável como 1.
2.execute a instrução dentro do loop se a countvariável for menor que 10. Em cada iteração, 3.envie a contagem para o console e aumente a contagem em 2.
após 5 iterações a condição count < 10 é false, o loop termina.
*/
