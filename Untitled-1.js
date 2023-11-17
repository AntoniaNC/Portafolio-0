// Obtener imágenes por su ID
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');
// Obtener elementos de audio por su ID
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');
const audio4 = document.getElementById('audio4');

// Funciones para reproducir sonidos al hacer clic en las imágenes
function reproducirSonido1() {
  audio1.currentTime = 0; // Reinicia el audio al inicio (opcional)
  audio1.play();
}

function reproducirSonido2() {
  audio2.currentTime = 0;
  audio2.play();
}

function reproducirSonido3() {
  audio3.currentTime = 0;
  audio3.play();
}

function reproducirSonido4() {
  audio4.currentTime = 0;
  audio4.play();
}

// Agregar evento de clic a cada imagen para reproducir el sonido correspondiente
imagen1.addEventListener('click', reproducirSonido1);
imagen2.addEventListener('click', reproducirSonido2);
imagen3.addEventListener('click', reproducirSonido3);
imagen4.addEventListener('click', reproducirSonido4);
// Añade más imágenes y sonidos si es necesario y asocia el evento clic a cada uno
