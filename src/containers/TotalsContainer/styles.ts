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
  max-width: 100%;

  padding: 1.2rem 1.4rem 0 1.4rem;

  background-color: ${primaryColors.white};
`;

export const TotalsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${spacings.space07};
  width: 100%;
  padding: 1.2rem 0;
  border-top : 1px solid rgba(0, 0, 0, 0.3);
`;

export const SubTotalsTexts = styled.div`
  font-weight: ${font.xbold};
  width: 30%;

  P{
    &:first-child{
      font-size: ${font.sizes.small};
      color: ${secondaryColors.grayDarker};
    }
    &:last-child{
      font-size: ${font.sizes.normal};
      color: ${primaryColors.dark};
    }
  }
`