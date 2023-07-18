var audio = document.getElementById("audio-player");
var lyricsElement = document.querySelector(".lyrics");

// Función para reproducir o pausar la canción
function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Función para mostrar los subtítulos
function showSubtitles() {
    var currentTime = audio.currentTime;
    var duration = 88; // Duración de la canción en segundos (1 minuto y 28 segundos)
  
    // Mostramos el subtítulo completo en el contenedor
    if (currentTime >= 0 && currentTime < 8) {
      lyricsElement.innerText = "Tú eres mi sol, mi único sol";
    } else if (currentTime >= 8 && currentTime < 14) {
      lyricsElement.innerText = "Me haces feliz cuando el cielo está gris";
    } else if (currentTime >= 14 && currentTime < 20) {
      lyricsElement.innerText = "Nunca sabrás, querida, cuánto te amo";
    } else if (currentTime >= 20 && currentTime < 32) {
      lyricsElement.innerText = "Por favor no te lleves mi sol";
    } else if (currentTime >= 32 && currentTime < 40) {
      lyricsElement.innerText = "La otra noche, querida, mientras dormía";
    } else if (currentTime >= 40 && currentTime < 48) {
      lyricsElement.innerText = "Soñé que te tenía en mis brazos";
    } else if (currentTime >= 48 && currentTime < 56) {
      lyricsElement.innerText = "Cuando desperté, querida, estaba equivocado";
    } else if (currentTime >= 56 && currentTime < 64) {
      lyricsElement.innerText = "Así que me acerqué y lloré";
    } else if (currentTime >= 64 && currentTime < 72) {
      lyricsElement.innerText = "Tú eres mi sol, mi único sol";
    } else if (currentTime >= 72 && currentTime < 80) {
      lyricsElement.innerText = "Me haces feliz cuando el cielo está gris";
    } else if (currentTime >= 80 && currentTime < 88) {
      lyricsElement.innerText = "Nunca sabrás, querida, cuánto amo a mi sarai <3";
    } else {
      lyricsElement.innerText = "";
    }
  
    // Ajustamos el tamaño del contenedor lyrics-container para que se muestren todos los subtítulos
    lyricsElement.style.width = (currentTime / duration) * 100 + "%";
  }
  
  
  
  

// Agregamos un listener al evento timeupdate del audio para mostrar los subtítulos en sincronización con la canción
audio.addEventListener("timeupdate", showSubtitles);
