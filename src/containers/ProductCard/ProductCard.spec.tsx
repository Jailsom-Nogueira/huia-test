// Libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Self
import { ProductCard } from './ProductCard';
// Mocks
import { product } from '../../common/mocks';


describe('ProductCard element', () => {
  test('ProductCard element renders', () => {
    render(<ProductCard product={product} />);
  });

  test('Button click', () => {
    render(<ProductCard product={product} />);
  
    userEvent.click(screen.getByTestId('button-component-1'))
    expect(screen.getByTestId('button-component-1')).toBeInTheDocument
  })
});
