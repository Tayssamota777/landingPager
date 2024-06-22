function trocarFoto() {

    let numFoto = parseInt(document.getElementById("numero").value);
    let foto = document.getElementById("div1");

    if (numFoto==1){
        foto.className= "imagem1";
    }
    if (numFoto==2){
        foto.className= "imagem2";
    }
    if (numFoto==3){
        foto.className= "imagem3";
    }
}