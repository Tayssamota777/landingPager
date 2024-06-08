//function name(parameter1,parameter2,parameter3) {}
// codigo de executação

function classificarNota(){

    let nota = document.getElementById("notaInput").value;

    let resultado= document.getElementById("resultado");
    

    if (nota >= 90 && nota <= 100) {
        resultado.textContent="Parabéns! Você tirou uma nota A!";
    } else if (nota >80 && nota <90) {
        resultado.textContent="Ótimo trabalho! Sua nota é B.";
    } else if ( nota>=70 && nota <=80) {
        resultado.textContent="Bom trabalho! Sua nota é C.";
    } else if ( nota>=60 && nota <70){
        resultado.textContent= "Você passou, mas pode melhorar! Sua nota é D.";
    } else if ( nota>=0 && nota <60){
        resultado.textContent="Infelizmente, você não passou. Sua nota é F.";
    } else {
        resultado.textContent="Nota inválida! Por favor, insira uma nota entre 0 e 100.";
    }

}