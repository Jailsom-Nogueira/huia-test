// Libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Self
import { ProductThumbnailCard } from './ProductThumbnailCard';
// Mocks
import { product } from '../../common/mocks';

describe('ProductThumbnailCard element', () => {
  test('ProductThumbnailCard element renders', () => {
    render(<ProductThumbnailCard product={product} />);
  });

  test('Button click', () => {
    render(<ProductThumbnailCard product={product} />);
  
    // userEvent.click(screen.getByTestId('button-component-1'))
    // expect(screen.getByTestId('button-component-1')).toBeInTheDocument
  })
});
