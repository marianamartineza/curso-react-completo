// test ('Esta prueba no debe de fallar', () => {
//     //! lanzar el error
//     if(1 === 0){
//         throw new Error('No puede dividir entre cero');
//     }
// });

describe('Pruebas en <DemoComponent />', () => {
  test('Esta prueba no debe fallar', () => {
    // 1.Inicializamos
    const message1 = 'Hola Mundo';

    // 2. Estimulo
    const message2 = message1.trim();

    // 3. Observar el comportamiento... esperado
    expect(message1).toBe(message2);
  });
});
