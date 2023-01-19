var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar(){
    var texto = textInput.value;

    var resultCriptografar = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")

    document.getElementById('output').innerHTML = '<textarea reandoly id="input-texto">' + resultCriptografar +'</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescriptografar = texto.replace(/enter/g,"e")
    .replace(/imes/g, "i")
    .replace(/ai/g,"a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")

    document.getElementById('output').innerHTML = '<textarea reandoly id="input-texto">' + resultDescriptografar + '</textarea>' + '<button class="btn-copiar" id="copiar"  onclick="copiar()">Copiar</button>'
    
}

function copiar(){
    var textCop = document.getElementById('output').innerHTML = '<textarea reandoly id="input-texto">' + resultDescriptografar + '</textarea>' + '<button class="btn-copiar" id="copiar"  onclick="copiar()">Copiado</button>';

    textCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");

}