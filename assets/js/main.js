// HAMBURGUER NAV BAR
const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', () => {
  nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
  nav.classList.remove('visible');
});

// REPRODUCTION VIDEO

const video = document.getElementById('miVideo');
const targetPlaybackRate = 0.4;
const increment = 0.8;
let currentPlaybackRate = 0;

function smoothPlayback() {
  if (currentPlaybackRate < targetPlaybackRate) {
    video.playbackRate = currentPlaybackRate;
    currentPlaybackRate += increment;
    requestAnimationFrame(smoothPlayback);
  } else {
    video.playbackRate = targetPlaybackRate;
  }
}

video.addEventListener('loadedmetadata', () => {
  // Comienza la animación cuando el video se haya cargado
  smoothPlayback();
});
