// Variables
let listaAmigos = [];
let amigosSorteados = [];

// Funciones

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function desactivarBoton(id) {
    document.getElementById(id).setAttribute('disabled', true);
}

function activarBoton(id) {
    document.getElementById(id).removeAttribute('disabled');
}

function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo').value.trim();

    if (nombreIngresado === '') {
        alert('Debe ingresar un nombre válido.');
        return;
    }

    if (listaAmigos.includes(nombreIngresado)) {
        alert(`¡${nombreIngresado} ya existe! Intenta agregar una variación.`);
        return;
    }

    listaAmigos.push(nombreIngresado);
    limpiarCaja();

    const listaImprimir = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombreIngresado;
    listaImprimir.append(li);
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Debes añadir nombres antes de realizar el sorteo.');
        return;
    }

    if (amigosSorteados.length === listaAmigos.length) {
        alert('Ya se han sorteado todos los nombres.');
        finalizarJuego();
        return;
    }

    let amigoSecreto;
    do {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        amigoSecreto = listaAmigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSecreto));

    amigosSorteados.push(amigoSecreto);
    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigoSecreto) {
    let resultado = document.getElementById('resultado');
    resultado.textContent = `Tu amigo/a secreto/a es: ¡${amigoSecreto}!`;
    alert('El nombre desaparecerá en 5 segundos. ¡Asegúrate de recordarlo!');

    setTimeout(() => {
        resultado.textContent = '';
    }, 5000);
}

function finalizarJuego() {
    document.getElementById('listaAmigos').textContent = '';
    document.getElementById('resultado').textContent = '';
    listaAmigos = [];
    amigosSorteados = [];
    desactivarBoton('sortear');
    desactivarBoton('agregar');

    let h2 = document.querySelector('h2');
    h2.innerHTML = 'Juego finalizado';
}

// Activar botón al inicio
activarBoton('agregar');
