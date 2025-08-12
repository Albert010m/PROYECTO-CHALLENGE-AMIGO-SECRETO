//VARIABLES
let amigos = [];
let amigosSorteados = [];

//Titulos y texto
function asignarTextoElemento(selector, texto) {
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
    alert('Por favor ingresa un nombre.');
    return;
  }

  amigos.push(nombre);
  amigosSorteados = []; 
  mostrarLista();
  limpiarCaja();
}

//Lista de amigos
function mostrarLista() {
  let listaHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    listaHTML += `<li>${amigos[i]}</li>`;
  }

  asignarTextoElemento('#listaAmigos', listaHTML);
}

//Sortear amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear =(. Agrega primero algunos nombres.');
    return;
  }

  //si ya se sortearon todos los amigos reiniciamos
  if (amigosSorteados.length === amigos.length) {
    alert('Todos los amigos han sido sorteados. ¡Reiniciando el soreto =)!');
    reiniciarSistema(); 
    return; 
  }

  //Sortear a los amigos que no se han sorteado
  let amigosDisponibles = amigos.filter(amigo => !amigosSorteados.includes(amigo));
  
  //Sorteo
  let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
  let amigoSecreto = amigosDisponibles[indiceAleatorio];
  amigosSorteados.push(amigoSecreto);

  asignarTextoElemento('#resultado', `Tú amigo secreto es: ¡${amigoSecreto}!`);
}

function reiniciarSistema() {
  amigos = []; 
  amigosSorteados = []; 
  mostrarLista(); 
  asignarTextoElemento('#resultado', ''); 
  limpiarCaja(); 
}

// TITULO Y TEXTO
asignarTextoElemento('h1', 'INTERCAMBIO NAVIDEÑO 2025');
asignarTextoElemento('h2', '¡ESCRIBE EL NOMBRE DE TUS AMIGOS!');

