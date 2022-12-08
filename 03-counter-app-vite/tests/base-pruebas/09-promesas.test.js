import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 
        
        const id = 1;

        getHeroeByIdAsync(id).then(hero => {

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            
            done();// debe estar dentro del then por fuera termina la prueba de inmediato y arroja un error 

        });

     });
    
     test('getHeroeByIdAsync debe de obtener un error si el heroe no existe', (done) => { 
        
        const id = 100;

        getHeroeByIdAsync(id).catch(
            error => {

                expect(error).toBe(`No se pudo encontrar el héroe ${ id }`);

                done();

        });

     });


 });