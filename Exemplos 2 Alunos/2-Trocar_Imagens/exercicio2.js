function trocarCor(){

    let numCor= parseFloat(document.getElementById("co1")).value;
    let cor= document.getElementById("color1");

    if (numCor==1){
        numCor.className= "cor1";
    }
    if (numCor==2){
        numCor.className= "cor2";
    }
    if (numCor==3){
        numCor.className= "cor3";
    }
    if (numCor==4){
        numCor.className= "cor4";
    }
}