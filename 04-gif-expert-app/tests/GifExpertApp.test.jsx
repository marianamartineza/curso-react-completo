import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('prueba de <GifExpertApp/>', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(<GifExpertApp/>);
        screen.debug();
        expect(container).toMatchSnapshot();
     });

 });