// Libs
import { render } from '@testing-library/react';
// Self
import { ProductsContainer } from './ProductsContainer';

describe('ProductsContainer element', () => {
  test('ProductsContainer element renders', () => {
    render(<ProductsContainer />);
  });
});
