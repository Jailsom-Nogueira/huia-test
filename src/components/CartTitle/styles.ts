// Libs
import styled from 'styled-components';
// Self
import { 
  font, 
  spacings,
  primaryColors,
  secondaryColors
} from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${spacings.space02};
  width: 100%;
  height: ${spacings.space02};

  background-color: ${secondaryColors.grayLight};
  
  h1{
    font-size: ${font.sizes.normal};
    font-weight: ${font.xbold};
    color: ${primaryColors.dark};
  }
`;