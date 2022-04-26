// Libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
// Self
import { RatingStars } from './RatingStars';

describe('RatingStars element', () => {
  test('RatingStars renders', () => {
    render(<RatingStars />);
  });

  test('RatingStars click', () => {
    render(<RatingStars />);
  
    userEvent.click(screen.getByTestId('rating-stars-1'))
    expect(screen.getByTestId('rating-stars-1')).toBeInTheDocument
  })

  test('RatingStars onMouseEnter and onMouseLeave', () => {
    render(<RatingStars />);
  
    userEvent.hover(screen.getByTestId('rating-stars-1'))
    userEvent.unhover(screen.getByTestId('rating-stars-1'))
    expect(screen.getByTestId('rating-stars-1')).toBeInTheDocument
  })
});
