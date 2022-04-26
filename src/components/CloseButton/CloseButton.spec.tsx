// Libs
import { render } from '@testing-library/react';
// Self
import { CloseButton } from './CloseButton';

describe('Button element', () => {
  test('Button renders', () => {
    render(<CloseButton icon={'src'} altText={'altText'} onClick={jest.fn()} />);
  });
});
