
const personajes = ['goku','vegeta','trunks'];
/* console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); */

const [, , p3]=personajes;
console.log(p3);

//funcion que retorna un arreglo
const retornaArreglo = () => {
    return ['ABC',123];
}

/* const arr = retornaArreglo();
console.log(arr);
 */

const [letras,numeros]= retornaArreglo();
console.log(letras,numeros);

//tarea
//1. El oriner valor del arr se llamara nombre
//2. setNombre
const funcionUseState = (valor) => {
    return [valor, ()=> {console.log('hola mundo')}];
}

const [nombre,setNombre] = funcionUseState ('Goku');
console.log(nombre);
setNombre();
/* arr[1]();*/

