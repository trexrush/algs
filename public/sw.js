const version = '1'
const CACHE = `cache-${version}`


self.addEventListener('install', event => {
    event.waitUntil((async () => {
        // const cache = await caches.open(CACHE_NAME);
        // cache.addAll(PRECACHE_ASSETS);
        console.log('SW: Installing');

    })());
});

self.addEventListener('activate', event => {
    console.log('SW: Activating');

    // event.waitUntil(() => {
    //     clients.claim()
    // });
    self.clients.claim()
});

self.addEventListener('fetch', event => {
    
    event.respondWith((async () => {
        const cache = await caches.open(CACHE);
        const cachedResponse = await cache.match(event.request);
        
        if (cachedResponse) {
            console.log("SW: returning cached result ", cachedResponse.url)
            return cachedResponse;
        }
        
        console.log('SW: Cache not hit, fetching', event.request.url);
        const response = await fetch(event.request)
        // https://stackoverflow.com/questions/49157622/service-worker-typeerror-when-opening-chrome-extension
        if (!event.request.url.includes('extension')) { cache.put(event.request, response.clone()) }
        return response
    })());
});