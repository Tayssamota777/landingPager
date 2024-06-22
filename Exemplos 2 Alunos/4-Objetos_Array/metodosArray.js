//push
//Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

let frutas = ["Maça", "Abacaxi", "Banana"];
console.log(frutas); // Saída: ["Maça", "Abacaxi", "Banana"]

frutas.push("Melancia");
console.log(frutas); // Saída: ["Maça", "Abacaxi", "Banana", "Melancia"]


//pop
//Remove o último elemento de um array e retorna esse elemento.
let carros = ["Classic", "Celt", "Celta", "Fiesta", "Palio"];
console.log(carros); // Saída: ["Classic", "Celt", "Celta", "Fiesta", "Palio"]

carros.pop();
console.log(carros); // Saída: ["Classic", "Celt", "Celta", "Fiesta"]


//splice
//Altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos.

let jogos = ["Bomba patch", "Bicho", "Truco", "Dominó", "Cabra cega", "Bom de Guerra"];
console.log(jogos); // Saída: ["Bomba patch", "Bicho", "Truco", "Dominó", "Cabra cega", "Bom de Guerra"]

// Remove 2 elementos a partir do índice 1
jogos.splice(1, 2);
console.log(jogos); // Saída: ["Bomba patch", "Dominó", "Cabra cega", "Bom de Guerra"]

// Substitui 1 elemento a partir do índice 2 por "Ben 10"
jogos.splice(2, 1, "Ben 10");
console.log(jogos); // Saída: ["Bomba patch", "Dominó", "Ben 10", "Bom de Guerra"]



//slice
//Retorna uma cópia de parte de um array em um novo array selecionado dos índices inicial até final (final não incluso).

let cantores = ["Kasinão", "Manel", "Fagner", "Belchior", "Belo", "Marrone"];
console.log(cantores); // Saída: ["Kasinão", "Manel", "Fagner", "Belchior", "Belo", "Marrone"]
let cantoresLendas = cantores.slice(1, 3);
console.log(cantoresLendas); // Saída: ["Manel", "Fagner"]
console.log(cantores); // O array original não é modificado



//concat
//Retorna um novo array que é uma concatenação de arrays ou valores fornecidos.
let compras1 = ["Arroz", "Feijão", "Macarrão"];
let compras2 = ["Cerveja", "Desinfetante", "Pneu"];
let compras = compras1.concat(compras2);
console.log(compras); // Saída: ["Arroz", "Feijão", "Macarrão", "Cerveja", "Desinfetante", "Pneu"]


//join
//Junta todos os elementos de um array em uma string e retorna essa string.
let cores = ["preto", "verde", "azul"];
let stringCores = cores.join(", ");
console.log(stringCores); // Saída: "preto, verde, azul"


//sort
//Ordena os elementos de um array localmente e retorna o array ordenado.
let animais = ["Cachorro", "Capivara", "Pombo", "Jaguatirica", "Tilápia"];
console.log(animais.sort()); // Saída: ["Capivara", "Cachorro", "Jaguatirica", "Pombo", "Tilápia"]


//indexOf
//Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.
let paises = ["Brasil", "Angola", "Colombia", "Chile", "Ucrania"];
console.log(paises.indexOf("Angola")); // Saída: 1
console.log(paises.indexOf("Espanha")); // Saída: -1 (não encontrado)