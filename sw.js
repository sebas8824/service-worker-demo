
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
        }, 1000);        
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