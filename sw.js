self.addEventListener('fetch', event => {
    /*if(event.request.url.includes('style.css')) {
        let response = new Response(`
            body {
                background-color: red !important;
                color: pink;
            }
        `,
        {
            headers: {
                'Content-Type': 'text/css'
            }
        });

        event.respondWith(response);
    }*/

    /*if(event.request.url.includes('img/main.jpg')) {
        let newImg = fetch('img/main-patas-arriba.jpg');
        event.respondWith(newImg);
    }*/

    /* error 404 no es interceptado por el catch */
    const response = fetch(event.request)
        .then(resp => resp.ok ? resp: fetch('img/main.jpg'));        

    event.respondWith(response);
});