//se usa mucho en react 

const activo = true;

/*let mensaje ='';

 if(activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
} */

// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const mensaje = (activo) ? 'activo' : null;
const mensaje = !(activo) && 'Activo';

console.log(mensaje);