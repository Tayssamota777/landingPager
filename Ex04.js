/*"Escreva um programa em JavaScript que declare duas constantes, 'catetoA' e 'catetoB', e atribua a elas os valores 3 e 4, respectivamente.*/

const catetoA = 3;
const catetoB = 4;

/*Em seguida, o programa deve calcular a hipotenusa de um triângulo retângulo usando o teorema de Pitágoras e armazenar o resultado na constante 'hipotenusa'.*/

/*A hipotenusa é igual à raiz quadrada da soma dos catetos ao quadrado
hipotenusa = √(catetoA² + catetoB²)*/

const hipotenusa = Math.sqrt(catetoA ** 2 + catetoB ** 2);

//Por fim, o programa deve imprimir no console a frase 'A hipotenusa do triângulo retângulo é: ' seguida pelo valor da hipotenusa calculada."

console.log("A hipotenusa do triângulo retângulo é:", hipotenusa);

/*Em JavaScript, Math.sqrt() é um método embutido que retorna a raiz quadrada de um número. 
Sintaxe: Math.sqrt(x)
x: O número do qual você deseja encontrar a raiz quadrada.
Retorno: Math.sqrt() retorna a raiz quadrada de x. Se x for negativo, NaN (Not a Number) será retornado*/


