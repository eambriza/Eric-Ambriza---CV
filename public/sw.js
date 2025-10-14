self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cv-v1').then(c => c.addAll([
      '/',
      '/index.html',
      '/src/main.js',
      '/src/render.js',
      '/src/i18n.js',
      '/src/sanitize.js',
      '/src/styles/variables.css',
      '/content/content.json'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});