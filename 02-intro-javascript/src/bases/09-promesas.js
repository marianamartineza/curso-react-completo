import {getHeroebyId} from './bases/08-import-export-arrays-functions';
//getHeroebyOwner

/* const promesa= new Promise((resolve,reject) => {
    setTimeout(() => {
        //tarea
        //importan el
        const p1 = getHeroebyId(2);
        console.log(heroe);
        resolve(p1);
        reject('No se pudo encontrar el heroe');
    }, 2000);
});

promesa.then((heroe) => {
    console.log('heroe',heroe);
}).catch(err => console.warn(err)); */

const getHeroebyIdAsync = (id) => {

    return  new Promise((resolve,reject) => {
        setTimeout(() => {
            //tarea
            //importan el
            const p1 = getHeroebyId(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);

});

}

/* getHeroebyIdAsync(10)
.then(heroe => console.log('Heroe',heroe))
.catch((err) => console.warn('no se pudo encontrar el heroe'));
 */

getHeroebyIdAsync(4)
.then(console.log)
.catch(console.warn);