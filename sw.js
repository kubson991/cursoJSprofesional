const VERSION='v1'

self.addEventListener('install',event=>{
    event.waitUntil(precache())
})

self.addEventListener('fetch',event=>{
    const request=event.request
    //get
    if(request.method !=='GET'){
        return
    }
    //buscar cache
    event.respondWith(cachedResponse(request))
    //actualizar cache
    event.waitUntil(updateCache(request))
})

async function precache(){
    const cache=await caches.open(VERSION)
    return cache.addAll([
        './',
        './index.html',
        './assets/BigBuckBunny.mp4',
        './assets/Mediaplayer.js',
        './assets/index.js',
        './assets/index.css',
        './plugins/AutoPause.js',
        './plugins/AutoPlay.js',
    ])
}

async function cachedResponse (request){
    const cache=await caches.open(VERSION)
    const response =await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request){
    const cache=await caches.open(VERSION)
    const response =await fetch(request)
    return  (response.status === 200 )
    ? cache.put(request, response) 
    :  console.log(`no se pudo cargar asset `)
    
}

