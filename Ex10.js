// Usando o prompt, pergunte ao usuário "Você quer criar um cadastro?" Se sim, clique no botão OK e faça as 4 perguntas abaixo:
// Qual o seu nome ?
// Qual é o seu endereço?
// Qual é o seu número de celular?
// Em seguinda, imprima todos esses detalhes no console. 
//Se clicar em cancelar, aparecerá a mensagem "Desculpe, visite novamente."

let click = confirm("Você deseja se cadastrar");
if (click == true) {

    let nome = prompt("Qual o seu nome ?");
    let telefone = prompt("Qual seu telefone ?");

    console.log(nome, telefone);
} else {
    alert("OK, faça seu cadastro outro dia!!");
}
