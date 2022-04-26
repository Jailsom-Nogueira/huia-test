// Libs
import { render } from '@testing-library/react';
// Self
import { CartTitle } from './CartTitle';

describe('CartTitle element', () => {
  test('CartTitle renders', () => {
    render(<CartTitle />);
  });
});
