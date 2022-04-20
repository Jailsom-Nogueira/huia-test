// Libs
import { render } from '@testing-library/react';
// Self
import { ProductCard } from './ProductCard';

describe('ProductCard element', () => {
  test('ProductCard element renders', () => {
    render(<ProductCard   
      productTitle= {'string'}
      productDescription= {'string'}
      productPrice= {240} />);
  });
});
