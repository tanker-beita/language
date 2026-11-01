// langLSRW offline cache. Pages and code use network-first (updates arrive as soon as online);
// bundled data under assets/ uses cache-first (large and rarely changes). Bump DATA_CACHE when assets change.
const CODE_CACHE = "langlsrw-code-v1";
const DATA_CACHE = "langlsrw-data-v1";
const KEEP = [CODE_CACHE, DATA_CACHE];

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith("langlsrw-") && !KEEP.includes(name)) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

const NETWORK_TIMEOUT_MS = 4000;

// On a weak connection, a cached copy is served after the timeout while the network request still refreshes the cache.
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const findCached = async () => await cache.match(request) || await cache.match(request, { ignoreSearch: true });
  // no-cache: always revalidate with the server, so the browser's HTTP cache cannot hand back an old page.
  const fetching = fetch(request, { cache: "no-cache" }).then((response) => {
    if (response.status === 200) cache.put(request, response.clone());
    return response;
  });
  const cached = await findCached();
  if (!cached) return fetching;
  try {
    return await Promise.race([
      fetching,
      new Promise((_, reject) => setTimeout(reject, NETWORK_TIMEOUT_MS))
    ]);
  } catch (error) {
    fetching.catch(() => {});
    return cached;
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.status === 200) cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || request.headers.has("range")) return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(new Request(new URL("./", self.registration.scope)), CODE_CACHE));
    return;
  }
  const isData = url.pathname.includes("/assets/");
  event.respondWith(isData ? cacheFirst(request, DATA_CACHE) : networkFirst(request, CODE_CACHE));
});
