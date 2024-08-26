
const textoBase = document.querySelector(".texto__base");
const textoResultado = document.querySelector(".texto__resultado");

/*LLAVES DE ENCRIPTACION

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function botonEncriptar(){
    const textoEncriptado = encriptar(textoBase.value)
    textoResultado.value = textoEncriptado;
    textoBase.value = "";
    textoResultado.style.backgroundImage = "none";
}


function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;

}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textoBase.value)
    textoResultado.value = textoEncriptado;
    textoBase.value = "";
}


function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;

}

function botonCopiar(){
    const textoResultado = document.querySelector(".texto__resultado");
    textoResultado.select();
    document.execCommand("copy");
}

document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.querySelector(".texto__base");
    textArea.addEventListener("input", function (event) {
        let value = event.target.value;

        //elimina acentos y tildes
        value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        //elimina caracteres que no sean letras, numeros o espacios
        value = value.replace(/[^a-z0-9\s]/gi, '');
        
        //convierte a minusculas
        value = value.toLowerCase();
        event.target.value = value;
    });
});



