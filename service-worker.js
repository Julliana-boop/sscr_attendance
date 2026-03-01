// SSC-R Attendance System — Service Worker
// Caches all files so the app works offline after first visit

const CACHE_NAME = 'sscr-attendance-v1';

const FILES_TO_CACHE = [
  './login.html',
  './login.js',
  './login.css',
  './student.html',
  './student.js',
  './student.css',
  './faculty.html',
  './faculty.js',
  './faculty.css',
  './faculty-scans.js',
  './admin.html',
  './admin.css',
  './system-logs.html',
  './student-log.css',
  './students-data.js',
  './manifest.json',
  './icons/icon-144.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
];

// ── Install: cache everything ──────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache local files strictly; external CDN files best-effort
      const local    = FILES_TO_CACHE.filter(f => f.startsWith('./'));
      const external = FILES_TO_CACHE.filter(f => !f.startsWith('./'));

      return cache.addAll(local).then(() =>
        Promise.allSettled(external.map(url =>
          fetch(url).then(r => cache.put(url, r)).catch(() => {})
        ))
      );
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: delete old caches ────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: serve from cache, fall back to network ─────────────────────────
self.addEventListener('fetch', event => {
  // Don't intercept non-GET or chrome-extension requests
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Cache a copy of successful responses for future offline use
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // If completely offline and not cached, return offline page
        if (event.request.destination === 'document') {
          return caches.match('./login.html');
        }
      });
    })
  );
});
