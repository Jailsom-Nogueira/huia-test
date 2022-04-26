// Libs
import { render } from '@testing-library/react';
// Self
import { Button } from './Button';

describe('Button element', () => {
  test('Button renders', () => {
    render(<Button buttonColor={'green'} onClick={jest.fn()} />);
  });

  test('Button renders whith non required props', () => {
    render(<Button buttonColor={'green'} buttonText={'string'} textColor={'white'} onClick={jest.fn()}/>);
  });
});
