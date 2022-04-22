// Libs
import { render } from '@testing-library/react';
// Self
import { CartEmpty } from './CartEmpty';

describe('CartEmpty element', () => {
  test('CartEmpty renders', () => {
    render(<CartEmpty />);
  });
});
