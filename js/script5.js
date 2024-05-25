//tipos de váriaveis
//sensíves a maiúsculas e minúculas

let num1 = 50;
let num2 = 50.05;
console.log(num1)
console.log(num2)

let strl1 = "microsoft"
let strl2 = "Microsoft"
let strl3 = "MICROSOFT"

console.log(strl1)
console.log(strl2)
console.log(strl3)

//nomes compostos
//hifens não são permitidos -> ex.:
//let primeiro-nome="Kauanny"

let primeiroNome = "Kauanny";
console.log(primeiroNome);

/*explicação dos tipos de variáveis
-> const
-> var
-> let
*/
//contante - não poderá receber outro valor 
const a = 80;
console.log(a);

//var está sendo substituída por let

var nome, sobrenome, nomeCompleto, dataAdm, tempo;

nome = "Tayssa";
sobrenome = "Mota";
nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);
document.getElementById("texto").innerHTML = nomeCompleto; //aparecer na página

dataAdm = 2005;
tempo = 2024 - dataAdm;
document.getElementById("tempoEmpresa").innerHTML = tempo + " anos de empresa";

var x, y;

x = 45;
y = 25;
total = x - y;

console.log(y);

//reatribuir outro valor para variável y

y = 30;
console.log(y);

let d, q;

d = 65;
q = 10;
resultado = d * q;
console.log(z);

{  //nesse momento z vale 15
    q = 15;
    console.log(z);
}
//nesse momento vale 20
console.log(z);

