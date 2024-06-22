/*
1.Use a instrução switch para selecionar um dos muitos blocos de código a serem executados.
2.Quando o JavaScript atinge uma break palavra-chave, ele sai do bloco switch. Isso interromperá a execução dentro do bloco switch.
3.A palavra-chave default especifica o código a ser executado se não houver correspondência
4. Neste exemplo, o caso 6 e 7 compartilham o mesmo bloco de código

switch (expression) {
    case value1:
        // code block 1;
        break;
    case value2:
         // code block 2;
        break;
   ...
    default:
       // default code block;
}
*/

function verificarDia() {

    let diaSemanaInput = document.getElementById("dia").value.toLowerCase();
    let resultadoElemento = document.getElementById("resultado");
    let mensagem;

    switch (diaSemanaInput) {

        case "segunda-feira":
            mensagem = "Vamos começar com tudo!!";
            break;
        case "terça-feira":
            mensagem = "Vamos começar com tudo!!";
            break;
        case "quarta-feira":
            mensagem = "Metade da semana ja foi!!";
            break;
        case "quinta-feira":
            mensagem = "Quase lá!!";
            break;
        case "sexta-feira":
            mensagem = "Sextou!!";
            break;
        case "sábado":
            mensagem = "Bom final de semana!!";
            break;
        case "domingo":
            mensagem = "Bom fim de semana!!";
            break;
        default:
            mensagem = "Digite um dia da semana válido";

    }

    resultadoElemento.textContent = mensagem;

}