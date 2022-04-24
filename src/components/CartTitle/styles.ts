// Libs
import styled from 'styled-components';
// Self
import { 
  font, 
  spacings,
  primaryColors
} from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${spacings.space02};
  height: ${spacings.space02};
  
  h1{
    font-size: ${font.sizes.normal};
    font-weight: ${font.xbold};
    color: ${primaryColors.dark};
  }
`;