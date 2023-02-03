import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por la ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    // console.log(hero);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  test('getHeroeById debe retornar indefinido si el heroe no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  // tarea
  //  debe retornar un arreglo con los heroes de DC
  //  lenght === 3
  //  toEqual al arreglo filtrado

  test('getHeroesByOwner debe retornar el arreglo de los heres de DC', () => {
    const owner = 'DC';
    const arr = getHeroesByOwner(owner);
    console.log(arr);

    expect(arr.length).toBe(3);

    expect(arr).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ]);

    expect(arr).toEqual(heroes.filter(heroe => heroe.owner === owner));
  });

  //  debe de retornar un arreglo con los heroes de Marvel
  //  length === 2

  test('getHeroesByOwner debe retornar el arreglo de los heres de Marvel', () => {
    const owner = 'Marvel';
    const arr = getHeroesByOwner(owner);
    console.log(arr);

    expect(arr.length).toBe(2);
  });
});
