// funciones en javascript , definir funciones como constante 
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;

console.log(saludar(`Goku`));
console.log(saludar(`vegeta`));
console.log(saludar(`natsu`));
console.log(saludar4());

const getUser = () => ({
        uid: `abcedes`,
        username : `lunasol`,
});

const user = getUser();
console.log(user);

//tarea 
// 1. Transformar a una funcion de flecha
// 2. Retornar objeto implicito
// 3. pruebas 

const getUsuarioActivo = (nombre) => ({
        uid: `SDFVETGHYJ`,
        username: nombre,
});


const usuarioActivo = getUsuarioActivo(`Maria`);
console.log(usuarioActivo);



