// Libs
import { render } from '@testing-library/react';
// Self
import Banner from '.';

describe('Banner element', () => {
  test('Banner renders', () => {
    render(<Banner 
      imageSrc='image src'
      bannerText='banner text'
    />);
  });
});
