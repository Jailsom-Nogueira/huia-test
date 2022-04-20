// Libs
import { FC, useState } from 'react';
// Self
import * as S from './styles';
// Assets
import starEmpty from '../../common/assets/icons/star-empty-icon.svg'
import starfilled from '../../common/assets/icons/star-filled-icon.svg'

export const RatingStars: FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <S.Container>
      {[...Array(5)].map((_star, index) => {
        index += 1;
        return (
          <S.ButtonStar
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
              <img
                src={starfilled}
                alt={'Star filled icon'}
              /> : 
              <img
                src={starEmpty}
                alt={'Star empty icon'}
              />
            }   
          </S.ButtonStar>
        );
      })}
    </S.Container>
  )
};
