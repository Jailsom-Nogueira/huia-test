// Libs
import { render } from '@testing-library/react';
// Self
import { IconButton } from './IconButton';

describe('IconButton element', () => {
  test('IconButton renders', () => {
    render(<IconButton altText={'Alt text'} icon={'Icon src'} onClick={jest.fn()} />);
  });
});
