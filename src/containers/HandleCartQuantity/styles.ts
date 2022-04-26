// Libs
import styled from 'styled-components';
// Self
import { font, primaryColors } from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  padding: 0.6rem 0;

  p{
    margin: 0;

    font-size: ${font.sizes.small};
    font-weight: ${font.xbold};
    color: ${primaryColors.dark};
  }
`;

export const CartQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;

  padding: 0 0.6rem;
  
  background-color: ${ primaryColors.white };
`;