
const persona = {
    nombre: 'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip: 55,
        lat: 134.5,
        lng: 234,
    }
}

console.log(persona);
//console.table(persona);

// const persona2 = persona; // error 
const persona2 = { ...persona};
persona2.nombre='Mariana';

console.log(persona2);