import { render,screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GifItem />', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
        const title='Este es el titulo';
        const url='https://google.com.ve';

        const {container} = render(<GifItem title={title} url={url}/>)
        screen.debug();
        expect(container).toMatchSnapshot();
     })

 })