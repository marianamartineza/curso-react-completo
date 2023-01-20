import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('prueba de <GifExpertApp/>', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(<GifExpertApp/>);
        // screen.debug();
        expect(container).toMatchSnapshot();
     });

     test('debe de tener el titulo de la aplicacion', () => {
        const name = 'GifExpertApp';
        
        render(<GifExpertApp/>);
        expect(screen.getByRole('heading',{level: 1}).innerHTML).toBe(name);
     });

     test('debe de mostrar el nombre de la categoria cuando se envien a la funcion', () => { 

        render(<GifExpertApp/>);

        const category = 'Midoriya';
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: category}});

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        // screen.debug();

        expect(screen.getByText(category).innerHTML).toBeTruthy();

      });

 });