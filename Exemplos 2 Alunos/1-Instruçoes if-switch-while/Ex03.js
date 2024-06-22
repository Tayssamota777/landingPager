/*
Igualdade estrita usando ===
Igualdade estrita dois valores e o tipo dado para a igualdade. Se os valores tem tipos diferentes, os valores são considerados não-igual*/

function igualdEstrita() {

    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);
    let mensagem;
    let resultado = document.getElementById("resultado");

    switch (true) {
        case numero1 === numero2:
            mensagem = "Os números digitados são estridamente iguais.";
            break;
        default:
            mensagem = "Os números digitados são diferentes (valor ou tipo).";
            break;
    }

    resultado.textContent = mensagem;
}