function jogarDado() {

    let x = Math.floor(Math.random() * 6 + 1);
    let foto1 = document.getElementById("div1");
    foto1.className = "caixa" + x;

    let y = Math.floor(Math.random() * 6 + 1);
    let foto2 = document.getElementById("div2");
    foto2.className = "caixa" + y;

    let z = Math.floor(Math.random() * 6 + 1);
    let foto3 = document.getElementById("div3");
    foto3.className = "caixa" + z;

    if (x == y && y == z) {
        document.getElementById("texto").innerHTML = "Acertou";
    } else {
        document.getElementById("texto").innerHTML = "Errou";
    }

}
