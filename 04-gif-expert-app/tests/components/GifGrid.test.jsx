import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"

describe('pruebas en <GifGrid/>', () => { 

    const category = 'One Punch';
    
    test('debe de mostrar el loading inicialmente', () => { 
        
        // pruebas para evaluar el estado inicial del componente
        render(<GifGrid category={category}/>);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect( screen.getByText(category));
     });

     test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => { 
        


      });
 })