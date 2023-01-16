import { render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en <AddCategory />', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render(<AddCategory onNewCategory={ () => {}}/>)
        screen.debug();

     });
 });