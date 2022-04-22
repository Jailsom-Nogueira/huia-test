// Libs
import styled from 'styled-components';
// Self
import {
  font,
  spacings,
  breakpoints,
  primaryColors, 
  secondaryColors,
} from '../../common/styles/theme';

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${spacings.space01};

  width: 100%;
  padding: 1.2rem 1.6rem 0 1.6rem;

  h1{
    font-size: ${font.sizes.normal};
    font-weight: ${font.xbold};
    color: ${primaryColors.dark};
  }
  p{
    font-size: ${font.sizes.xSmall};
    font-weight: ${font.normal};
    color: ${secondaryColors.gray};

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 25px;

  padding: 0.6rem 1.6rem;
  margin: 0.4rem 0;
  
  p{
    font-size: ${font.sizes.normal};
    font-weight: ${font.bold};
    color: ${secondaryColors.grayDark};
  }

  @media (max-width: ${breakpoints.large}) {
    p{
      font-size: ${font.sizes.small};
    }
  }
`;