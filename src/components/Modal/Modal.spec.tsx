// Libs
import { render } from '@testing-library/react';
// Self
import { Modal } from './Modal';

describe('Modal element', () => {
  test('Modal renders', () => {
    render(<Modal />);
  });
});
