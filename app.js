// VARIABLES
let amigos = [];
let amigosSorteados = [];

//Titulos y texto 
function asignarTextoElemento(selector, texto){
    const elemento = document.querySelector(selector);
    elemento.innerHTML = texto;
    return;
}

//Limpiar caja de texto 
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}
 
//Agregar amigos
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre === '') {
        alert('Por favor ingresa un nombre');
        return;
    }
    amigos.push(nombre);
    amigosSorteados = [];
    mostrarLista();
    limpiarCaja();
}
 //Lista de amigos
 function mostrarLista() {
    let listaAmigos = '';
    for (let i = 0; i<amigos.length; i++) {
        listaAmigos += `${amigos[i]}`;
    }
    asignarTextoElemento('#listaAmigos', listaAmigos);
 }

 //Sortear amigo secreto
 function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear =(, agrega algunos nombres');
        return;
    }
 }