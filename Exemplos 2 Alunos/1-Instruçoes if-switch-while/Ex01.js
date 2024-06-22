// Função para verificar a elegibilidade e atualizar o resultado na página

function verificarIdade() {
    let verIdade = parseInt(document.getElementById("idade").value);
    let resultadoElemento = document.getElementById("resultado");
    //let resultadoElemento = document.getElementById("resultado");

    if (verIdade >= 18) {
        //resultadoElemento.textContent = "voce poderá dirigir";
        resultadoElemento.textContent = "Você poderá dirigir!";
        /*console.log("Você poderá dirigir!");*/
    } else {
        resultadoElemento.textContent = "Não poderá dirigir!"
        /*console.log("Não poderá dirigir!");*/
    }
}

