/*
Operadores Aritméticos: Realizam operações matemáticas em valores numéricos.
+ (adição)
- (subtração)
* (multiplicação)
/ (divisão)
% (módulo, retorna o resto da divisão)
++ (incremento)
-- (decremento)
*/

var valor1, valor2, total;
valor1 = 5;
valor2 = 5;
total = valor1 + valor2;
console.log(total);

var valor3, soma;
valor3 = 17;
soma = ++valor3;
console.log(soma);
document.getElementById("texto").innerHTML = "o valor é incrementado é " + soma;



/*
Operadores de Atribuição: Atribuem valores a variáveis.
= (atribuição)
+= (atribuição de adição)
-= (atribuição de subtração)
*= (atribuição de multiplicação)
/= (atribuição de divisão)
%= (atribuição de módulo)
*/

var valor5, valor6, calcular;
valor5 = 3;
valor6 = 20;

// valor5 = valor5 + valor6;
valor5 += valor6;
console.log(valor5);

/*
Operadores de concatenação de strings (+) 
*/

var  id, registro, codigoFinal;
id = "CFT/CRT";
registro = "12345";
codigoFinal = id + " " + registro;
console.log(codigoFinal);


/*
Operadores de Comparação: Comparação de valores para determinar a verdade de uma expressão.
== (igual a)
!= (diferente de)
=== (igual a, verificar se igual o valor e o tipo de dado)
!== (diferente de, incluindo tipo de dado)
> (maior que)
< (menor que)
>= (maior ou igual a)
<= (menor ou igual a)
*/

var num1, num2, verificar;
num1 = 4;
num2 = 4;

verificar = num1 ==num2;
console.log(verificar);

var num1, num2, verificarTudo;
num1 = 4;
num2 = "4";

verificarTudo = num1 ===num2;
console.log(verificarTudo);

/*
Operador Ternário: Permite atribuir um valor com base em uma condição.
condicao ? valorSeVerdadeiro : valorSeFalso
*/

var idade, maior;
idade =25;
maior = (idade<18) ? "MENOR DE 18" : "MAIOR DE 18";
console.log(maior);


/*
Operadores Lógicos: Realizam operações lógicas em valores booleanos.
&& (e lógico)
|| (ou lógico)
! (negação lógica)
*/

var idadeEleitor, resultado, resultado1;
idadeEleitor = 65;
resultado = (idadeEleitor>60 && idadeEleitor < 70); //true // false
console.log(resultado);

resultado1 = !(idadeEleitor===65); // negação //true // false
console.log(resultado1);