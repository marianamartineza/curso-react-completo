import { fireEvent, render,screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('pruebas en <CounterApp/>', () => { 

    //tarea 
    const initialValue= 10;

    test('debe de hacer match con el snapshot', () => { 
        const {container}=render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot();
     });

     test('debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={100}/>)
        expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading',{level: 2}).innerHTML).toContain("100");
    });

    test('debe de incrementar con el boton +1', () => { 
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        // screen.debug();
        expect(screen.getByText('11')).toBeTruthy();
     });

     test('debe de decrementar con el boton -1', () => { 
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
      });

      test('debe de reiniciar al valor inicial con el boton reset', () => {
        render(<CounterApp value={300}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // screen.debug();
        // fireEvent.click(screen.getByText('reset'));
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}));
        // screen.debug();
        // expect(screen.getByText(300)).toBeTruthy();
        expect(screen.getByTestId('test-counter').innerHTML).toContain('300');
        // expect(getByTestId('test-title').innerHTML).toContain(title);
      });

 });