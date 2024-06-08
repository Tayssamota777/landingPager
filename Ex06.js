/*
O programa deverá calcular a área de um círculo utilizando a fórmula matemática π * raio²
Declare uma variável 'raio' com o valor de 5. 

Para armazenar o resultado declare uma variável let com o nome 'areaCirculo'

Por fim, o programa deverá imprimir no console a frase 'A área do círculo é: ' seguida pelo valor da área do círculo, arredondado para duas casas decimais."

Math.PI é uma constante em JavaScript que representa o valor matemático de pi (π), aproximadamente igual a 3.14159.

Math.pow() é um método em JavaScript que é usado para calcular a base elevada à potência de um expoente. 
Sintaxe: Math.pow(base, expoente)
base: O número que será elevado à potência do expoente.
expoente: O número pelo qual a base será elevada.*/

//π * raio²
let raio = 5;
let areaCirculo = Math.PI * Math.pow(raio, 2);
console.log("A área do circulo é:", areaCirculo);

//Math.pow(base, expoente)
let areaCirculo1 = Math.PI * Math.pow(raio, 2);
console.log("A área do circulo é:", areaCirculo1.toFixed(2));



