// Libs
import styled from 'styled-components';
// Self
import { 
  font,
  primaryColors
} from '../../common/styles/theme';

export const Container = styled.div`
  
  h1{
    font-size: ${font.sizes.normal};
    font-weight: ${font.xbold};
    color: ${primaryColors.dark};
  }
`;