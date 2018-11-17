if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            /*setTimeout(() => {
                reg.sync.register('posteo-programitas');
                console.log('Se enviaron los archivos al server');
            }, 3000);*/
            Notification.requestPermission().then(result => {
                console.log(result);
                reg.showNotification('Hola Mundo');
            });
        });


}

/*fetch('https://reqres.in/api/users')
    .then(response => response.text())
    .then(console.log);
*/

//if(window.SyncManager) {}