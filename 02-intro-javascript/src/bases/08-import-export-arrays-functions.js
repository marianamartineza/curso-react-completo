import heroes, {owners } from '../data/heroes';
//import {heroes}  from './data/heroes';
console.log(owners);
console.log(heroes);

/* const getHeroebyId = (id) => {
    return heroes.find((heroe) => heroe.id === id);
} */

export const getHeroebyId = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroebyId(2));

// tarea
// filter no find porque solo retorna 1 
export const getHeroebyOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroebyOwner('Marvel'));