// Libs
import styled from 'styled-components';
// Self
import { 
  font, 
  primaryColors, 
  secondaryColors,
  spacings
} from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  max-width: 100%;

  line-height: ${font.lineHeight.small};
`;

export const ImageWrapper = styled.div`
  width: 10vw;
  height: auto;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 1.2rem 1.4rem 0 1.4rem;

  color: ${primaryColors.dark};

  background-color: ${secondaryColors.grayXLight};

  h1{
    font-size: ${font.sizes.normal};
    font-weight: ${font.xbold};
  }
  
  p{
    margin-top: ${spacings.space02};
    
    font-size: ${font.sizes.xSmall};
    font-weight: ${font.normal};

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const TextWrapper = styled.div`
  width: 10vw;
  flex-grow: 1;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.6rem 0;

  width: 100%;
`