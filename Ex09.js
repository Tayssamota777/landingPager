/* Criar um programa simples que classifica um aluno com base na sua nota em uma prova.
 Declare a variável nota, que irá representar a nota de um aluno
 O programa deverá imprimir uma mensagem personalizada de acordo com a faixa na qual a nota se enquadra:

Se a nota estiver entre 90 e 100, imprime "Parabéns! Você tirou uma nota A!".
Se a nota estiver entre 80 e 89, imprime "Ótimo trabalho! Sua nota é B.".
Se a nota estiver entre 70 e 79, imprime "Bom trabalho! Sua nota é C.".
Se a nota estiver entre 60 e 69, imprime "Você passou, mas pode melhorar! Sua nota é D.".
Se a nota estiver entre 0 e 59, imprime "Infelizmente, você não passou. Sua nota é F.".
Se a nota estiver fora do intervalo válido (menor que 0 ou maior que 100), imprime "Nota inválida! Por favor, insira uma nota entre 0 e 100.". */


let nota = 100;
if (nota >= 90 && nota <= 100) {
    console.log("Parabéns! Você tirou uma nota A!");
} else if (nota >80 && nota <90) {
    console.log("Ótimo trabalho! Sua nota é B.");
} else if ( nota>=70 && nota <=80) {
    console.log ("Bom trabalho! Sua nota é C.");
} else if ( nota>=60 && nota <70){
    console.log ("Você passou, mas pode melhorar! Sua nota é D.");
} else if ( nota>=0 && nota <60){
    console.log ("Infelizmente, você não passou. Sua nota é F.");
} else {
    console.log ("Nota inválida! Por favor, insira uma nota entre 0 e 100.");
}
