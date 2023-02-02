const version = 'beta'
const IMG_CACHE = 'imgcache'
const DATA_CACHE = `algsetcache`


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
        // TODO: implement caches bc theyre not functional atm
        // const cache = await caches.open(DATA_CACHE);
        // const cachedResponse = await cache.match(event.request);
        
        // if (cachedResponse) {
        //     console.log("SW: returning cached result")
        //     return cachedResponse;
        // } 
        
        console.log('SW: Cache not hit, fetching', event.request);
        const response = await fetch(event.request)
        return response
    })());
});