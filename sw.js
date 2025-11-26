
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('inventaris-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        'https://cdn.tailwindcss.com',
        'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js',
        './styles.css',
        './app.js',
        './favicon.ico',
        './logo.png',
        'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js',
        'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js',
        'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});