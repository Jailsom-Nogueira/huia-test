// Libs
import { render } from '@testing-library/react';
// Self
import { Banner } from './Banner';

describe('Banner element', () => {
  test('Banner renders', () => {
    render(<Banner 
      imageSrc='image src'
      bannerText='banner text'
    />);
  });
  test('Banner renders without text', () => {
    render(<Banner 
      imageSrc='image src'
    />);
  });
});
