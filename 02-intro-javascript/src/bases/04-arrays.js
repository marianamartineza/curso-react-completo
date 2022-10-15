// arreglos de tamanio fijo 
//const arreglo = new Array(100);
//arreglo.push(1);
const arreglo = [];
arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4)
// no es recomendable usar el push 

let arreglo2 = [ ...arreglo, 5];

//arreglo2.push(5);

const arreglo3 = arreglo2.map(function(numero){
 return numero * 2;
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);





