import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GifItem />', () => {
  const title = 'Este es el titulo';
  const url = 'https://google.com.ve/img.jpg';

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test('debe de recibir el url y el titulo correctamente', () => {
    render(<GifItem title={title} url={url} />);

    //    expect(screen.getByRole('img').src).toBe(url);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe de mostrar el titulo en el componenente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
