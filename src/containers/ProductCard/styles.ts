// Libs
import styled from 'styled-components';
// Self
import { 
  breakpoints,
  font, 
  primaryColors, 
  secondaryColors,
  spacings
} from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 32%;
  height: auto;

  @media (max-width: ${breakpoints.large}) {
    max-width: 45%;
  }

  @media (max-width: ${breakpoints.medium}) {
    max-width: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
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