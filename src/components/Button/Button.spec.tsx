// Libs
import { render } from '@testing-library/react';
// Self
import Button from '.';

describe('Button element', () => {
  test('Button renders', () => {
    render(<Button buttonColor={'green'} />);
  });

  test('Button renders whith non required props', () => {
    render(<Button buttonColor={'green'} buttonText={'string'} textColor={'white'}/>);
  });
});
