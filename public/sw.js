const version = '4'
const CACHE = `cache-${version}`

self.addEventListener('install', event => {
    // console.log('SW: Installing');
    event.waitUntil((async () => { /* static */ })());
});

self.addEventListener('activate', event => {
    // console.log('SW: Activating');
    self.clients.claim()
});

// https://jcs.wtf/service-worker-stale-while-revalidate/
const fetchThenCache = async (event, cache) => {
    const response = await fetch(event.request)
    // https://stackoverflow.com/questions/49157622/service-worker-typeerror-when-opening-chrome-extension
    if (!event.request.url.includes('extension')) { cache.put(event.request, response.clone()) }

    // console.log("SW: caching fetch ", response.url)
    return response
}

self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE);
        const cachedResponse = await cache.match(event.request);
        
        if (cachedResponse) {
            // console.log("SW: returning cached result ", cachedResponse.url)
            let networkRes = fetchThenCache(event, cache)
            return navigator.onLine ? networkRes : cachedResponse;
        }
        
        // console.log('SW: Cache not hit, fetching', event.request.url);
        return fetchThenCache(event, cache)
    })());
});