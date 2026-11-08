(() => {
  const video = document.getElementById('video-porton');
  const placeholder = document.getElementById('video-placeholder');

  // Permite compartir este archivo con páginas que no contienen el video.
  if (!video || !placeholder) return;

  const source = (video.dataset.src || '').trim();

  // Hasta agregar la ruta real, se conserva el cartel sin solicitar archivos.
  if (!source) return;

  video.addEventListener('loadedmetadata', () => {
    placeholder.hidden = true;
    video.hidden = false;
  });

  video.addEventListener('error', () => {
    video.hidden = true;
    placeholder.hidden = false;

    const note = placeholder.querySelector('.video-note');
    if (note) {
      note.textContent =
        'No se pudo cargar el video. Consultanos por WhatsApp para verlo.';
    }
  });

  video.src = source;
  video.load();
})();
