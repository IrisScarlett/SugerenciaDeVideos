//Función IIFE (auto-ejecutable)
const Media = (() => {
   //Función Privada

   //Crear elemento iframe en el DOM

   const agregarVideo = (url, id) => {
       let ifrm = document.createElement('iframe');
       console.log(ifrm)
       elem = document.getElementById(id);
       console.log(elem)
       elem.appendChild(ifrm);
       ifrm.setAttribute('src', url);
       ifrm.setAttribute('width', 560);
       ifrm.setAttribute('height', 315);
   }

   return{
       mostrar: (url, id) => agregarVideo(url,id)
   }
})();


//Parent
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (url) => _url = url;
    }

    get url() {
        return this.getUrl;
    }
    
    set url (url){
        this.setUrl(url);
    }

    setInicio = () => {
        console.log(`Este método es para realizar un cambio en la URL del video`);
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        const _id = id;
        this.getId = () => _id;
        this.setId = (id) => _id = id;
    }

    get id() {
        return this.getId;
    }

    set id (id) {
        this.setId(id);
    }

    playMultimedia = () => {
        //Validación
        document.querySelectorAll('iframe').forEach(
            function (elem){
                elem.parentNode.removeChild(elem);
            });

            Media.mostrar(this.getUrl(), this.getId());
    }

    setInicio = (tiempo) => {
        document.getElementById(this.getId()).setAttribute('src', `${this.getUrl()}?t=${tiempo}`);
    };
}

//Musica
const btnMusica = document.getElementById('btnMusica');
btnMusica.addEventListener('click', () =>{
    urlMusica = 'https://www.youtube.com/embed/UMoYR6gBpkc';
    const musica = new Reproductor(urlMusica, 'musica');
    musica.playMultimedia();
});

//Pelicula
const btnPelicula = document.getElementById('btnPelicula');
btnPelicula.addEventListener('click', () =>{
    urlPelicula = 'https://www.youtube.com/embed/fIhKqaNp4Dc';
    const pelicula = new Reproductor(urlPelicula, 'peliculas');
    pelicula.playMultimedia();
    pelicula.setInicio(15);
});


//Series

const btnSerie = document.getElementById('btnSerie');
btnSerie.addEventListener('click', () =>{
    urlSerie = 'https://www.youtube.com/embed/hOVoAaPBQ9Y';
    const serie = new Reproductor(urlSerie, 'series');
    serie.playMultimedia();
});

