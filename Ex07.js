/*Declare um valor para uma variável com o nome idade, que representará a idade de um espectador.

O programa deverá informar qual programa de TV espectador poderá assistir de acordo com as condições:

Se a idade for maior ou igual a 18, imprime "Você pode assistir Barbie". Caso contrário, imprime "Você pode assistir Dexter".*/

// usando a lógica E (&&). O aluno pode participar da atividade extracurricular se sua nota média for maior ou igual a 7.0 E se possuir autorização dos pais. Se alguma das condições for falsa, o aluno não pode participar da atividade extracurricular.

//usando a lógica OU (||) para verificar se o usuário pode acessar o conteúdo premium. Ele pode acessar se tiver o cadastro OK OU se já for um usuário premium. Se ambas as condições forem falsas, o usuário não pode acessar o conteúdo premium.

// usando a lógica E (&&) e a lógica OU (||). O usuário pode acessar o evento exclusivo se for um estudante OU um professor E se possuir um convite. Se alguma das condições for falsa, o usuário não pode acessar o evento exclusivo.

let idade = 28;

//sempre vem entre ()

if (idade <= 18) {
    console.log("Assistir Barbie");
} else {
    console.log("Assistir Batman");
}

let qtdeDiasdeAtraso = 68;

if (qtdeDiasdeAtraso > 60) {
    console.log("Protestar");
} else {
    console.log("Negativar");
}

// Se  a UNIDADE EM ESTOQUE for maior ou igual a 7 estará "OK", caso ao contrário "COMPRAR"

let estoque = 100;
if (estoque >= 30) {
    console.log("OK");
} else {
    console.log("COMPRAR O ITEM PARA O ESTOQUE");
}

let notaMedia = 80;
let autorizacaoPais = "sim";
if (notaMedia >= 70 && autorizacaoPais == "sim") {
    console.log("Pode participar da atividade");
} else {
    console.log("Não poderá participar da atividade");
}

let cadastro = "Premium";
let areavip = "sim";
if (cadastro == "sim" || areavip == "sim") {
    console.log("Tem area VIP");
} else {
    console.log("Não tem acesso a area VIP");
}

let profissao = "estudante";
let possuiConvite = "sim";
if ((profissao == "estudante" || profissao == "professor") && possuiConvite == "sim") {
    console.log("Entra no evento");
} else {
    console.log("Não tem acesso")
}


