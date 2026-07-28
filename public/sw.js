// No-op service worker (placeholder so registration doesn't 404).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
