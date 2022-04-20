// Libs
import React, { useState } from 'react';
// Self
import { Container, ButtonStar } from './styles';

const RatingStars: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <Container>
      {[...Array(5)].map((_star, index) => {
        index += 1;
        return (
          <ButtonStar
            data-testid={'rating-stars-' + index}
            type="button"
            key={index}
            buttonSwitch={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {
              index <= (hover || rating) ? 
              <span>&#9733;</span> : 
              <span>&#9734;</span>
            }   
          </ButtonStar>
        );
      })}
    </Container>
  )
};

export default RatingStars;
