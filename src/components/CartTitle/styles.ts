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
  column-gap: ${spacings.space02};
  width: 100%;
  max-height: ${spacings.space05};

  h1{
    font-size: ${font.sizes.normal};
    font-weight: ${font.xbold};
    color: ${primaryColors.dark};
  }
`;