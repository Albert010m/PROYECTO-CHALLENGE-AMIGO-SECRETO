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
//si ya se sortearon todos los amigos reiniciamos 
    if  (amigosSorteados.length === amigos.length){
        alert('Todos los amigos tienen nuevos amigos secretos, comenzaremos de nuevo =)');
        reiniciarSorteo();
        return;
    }

    //Sortear a los amigos que no se han sorteado
    let amigosNoSorteados = amigos.filter(amigo => !amigosSorteados.includes(amigo));

    //Sorteo
    let amigosAleatorios = Math.floor(Math.random()*amigosNoSorteados.length);
    let amigoSecreto = amigosNoSorteados[amigosAleatorios];
    amigosSorteados.push(amigoSecreto);
    asignarTextoElemento('#resultado', `Tú amigo secreto es: ¡${amigoSecreto}!`);
 }
