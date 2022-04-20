// Libs
import styled from 'styled-components';
// Self
import { 
  font, 
  primaryColors, 
  secondaryColors
} from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;
  height: auto;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 17px 20px 0 20px;

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
  padding: 5px 20px;
  margin: 5px 0;
  
  p{
    font-size: ${font.sizes.normal};
    font-weight: ${font.bold};
    color: ${secondaryColors.grayDark};
  }
`;