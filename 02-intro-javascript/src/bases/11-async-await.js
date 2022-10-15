
const getImagen = async() => {

    try{

        const apiKey = 'd6juSkxy8WiAD8qZxPQGjkr4JpAgqy6C';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        //tarea mostrar la imagen en el navegador
        const {url} = data.images.original;


        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    }catch(error){

        //manejo del error
        console.error(error);

    }

    
}

getImagen();