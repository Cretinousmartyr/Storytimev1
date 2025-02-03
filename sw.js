const cacheName = 'cloud-adventure-cache-v1';
const assetsToCache = [
  './index.html',
  './manifest.json',
  './sw.js'
  // Add additional assets (e.g., icon files) here.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(assetsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
