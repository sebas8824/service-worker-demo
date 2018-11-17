
// Se dispara con cualquier cambio en el SW.
self.addEventListener('install', event => {
    // Se usa para bajar assets o crear un cache.
    console.log('SW: Instalando SW');
    
    // Lo mejor es que el cliente cierre la webapp de tal modo que el nuevo SW entre en accion
    // Por eso no es muy recomendado usar el self.skipWaiting() ya que se pierden datos para el 
    // cliente
    //self.skipWaiting();

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas.');
            self.skipWaiting();
            resolve();
        }, 1);        
    });

    // Esperar hasta que la promesa haya terminado: 
    // event.waitUntil(<promesa>);
    event.waitUntil(instalacion);
});

// Cuando SW toma control de la aplicación
self.addEventListener('activate', event => {
    // Se usa para borrar caché viejo.
    console.log('SW: Activo, listo para controlar la app.');
});

// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {
    // Aplicar estrategias del caché
    /*   
    console.log('SW: ', event.request.url);
    if(event.request.url.includes('https://reqres.in')) {
        const respuesta = new Response(`{ok: false, mensaje: 'mi perrito caliente'}`);
        event.respondWith(respuesta);
    }
    */
});

// SYNC: Recuperamos la conexión a internet y hace una tarea especifica.
self.addEventListener('sync', event => {
    console.log('Tenemos conexión!');
    console.log(event);
    // tag marca un evento con algun nombre
    console.log(event.tag);
});

// PUSH: Manejar las push notifications
self.addEventListener('push', event => {
    console.log('Notificacion recibida');
});