// Libs
import styled from 'styled-components';
// Self
import { 
  font,
  primaryColors, 
  secondaryColors,
  breakpoints
} from '../../common/styles/theme';

export const Container = styled.div`
  margin-top: 1.2rem;
  font-weight: ${font.xbold};

  P{
    &:first-child{
      font-size: ${font.sizes.normal};
      color: ${secondaryColors.grayDarker};
    }
    &:last-child{
      font-size: ${font.sizes.heading06};
      color: ${primaryColors.dark};
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    p{
      text-align: end;
    }
  }
`