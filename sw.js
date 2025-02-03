const cacheName = 'sky-adventure-cache-v1';
const assetsToCache = [
  './index.html',
  './manifest.json',
  './sw.js'
  // Add any additional assets (icons, images, etc.) here
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(assetsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
