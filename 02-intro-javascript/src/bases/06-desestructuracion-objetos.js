// desestruturacion de objetos 

const persona = {
    nombre : 'Mariana',
    edad: 21,
}

const {nombre, edad} = persona;
console.log(nombre, edad);

// con funcion 
const useContext = ({nombre, edad}) => {
    console.log(edad,nombre);

    return {
        nombreClave: `clave${nombre}`,
        anios: edad,
    }
}

const {nombreClave, anios} = useContext(persona);

console.log(nombreClave,anios);

// desestructuracion doble 
const persona2 = {
    nombre: `luna`,
    apellido: `ramirez`,
}

//desestruturacion de un objeto
const useContext2 = ({nombre,apellido}) => {
    return {
        nombreCompleto:`${nombre} ${apellido}`,
        notas: {
            ciencia: 20,
            mate: 18,
        }
    }
}

// desestructuracion anidada
const {nombreCompleto, notas:{ciencia,mate}} = useContext2(persona2);
console.log(nombreCompleto, ciencia, mate);

// desestructuracion por pasos
//const {nombreCompleto, notas} = useContext2(persona2);
//console.log(nombreCompleto);
//console.log(notas);