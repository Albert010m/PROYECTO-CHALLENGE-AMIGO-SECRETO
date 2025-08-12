let amigos = [];
let amigosSorteados = [];

function asignarTextoElemento(selector, texto) {
  const elemento = document.querySelector(selector);
  elemento.innerHTML = texto;
  return;
}

// Limpia el campo de texto
function limpiarCaja() {
  document.getElementById('amigo').value = '';
}

// Función para agregar amigo
function agregarAmigo() {
  let nombre = document.getElementById('amigo').value.trim();

  if (nombre === '') {
    alert('Por favor ingresa un nombre.');
    return;
  }

  amigos.push(nombre);
  amigosSorteados = []; // Reinicia los amigos sorteados al agregar uno nuevo
  mostrarLista();
  limpiarCaja();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
  let listaHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    listaHTML += `<li>${amigos[i]}</li>`;
  }

  asignarTextoElemento('#listaAmigos', listaHTML);
}

// Función para sortear amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear =(. Agrega primero algunos nombres.');
    return;
  }

  // Si ya se sortearon todos los amigos, reinicia TODO (como un f5)
  if (amigosSorteados.length === amigos.length) {
    alert('Todos los amigos han sido sorteados. ¡Reiniciando el soreto =)!');
    reiniciarSistema(); // Llama a la función que borra todo
    return; // Termina la función para no seguir sorteando
  }

  // Filtra los amigos que no han sido sorteados
  let amigosDisponibles = amigos.filter(amigo => !amigosSorteados.includes(amigo));
  
  // Selecciona un amigo aleatorio de los disponibles
  let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
  let amigoSecreto = amigosDisponibles[indiceAleatorio];
  
  // Agrega el amigo a la lista de sorteados
  amigosSorteados.push(amigoSecreto);

  asignarTextoElemento('#resultado', `Tú amigo secreto es: ¡${amigoSecreto}!`);
}

// Función para reiniciar TODO (como un F5)
function reiniciarSistema() {
  amigos = []; // Vacía la lista de amigos
  amigosSorteados = []; // Vacía la lista de sorteados
  mostrarLista(); // Actualiza la lista en pantalla 
  asignarTextoElemento('#resultado', ''); // Limpia el resultado del sorteo
  limpiarCaja(); // Limpia todo el texto
}

// TITULO Y TEXTO
asignarTextoElemento('h1', 'INTERCAMBIO NAVIDEÑO 2025');
asignarTextoElemento('h2', '¡ESCRIBE EL NOMBRE DE TUS AMIGOS!');
