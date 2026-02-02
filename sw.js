// En minimal Service Worker for å tilfredsstille PWA-kravet
self.addEventListener('fetch', function(event) {
    // Vi gjør ingenting spesielt, bare lar nettleseren hente filer som normalt.
    // Appen din håndterer sin egen offline-logikk internt.
    return;
});