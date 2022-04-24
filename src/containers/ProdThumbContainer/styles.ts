// Libs
import styled from 'styled-components';
// Self
import {
  primaryColors, 
  secondaryColors
} from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 70vh;
  gap: 10px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${secondaryColors.gray};
    border: 0px none ${primaryColors.white};
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${secondaryColors.grayDarker};
  }
  ::-webkit-scrollbar-thumb:active {
    background: ${primaryColors.dark};
  }
  ::-webkit-scrollbar-track {
    background: ${secondaryColors.grayXLight};
    border: 0px none ${primaryColors.white};
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: ${secondaryColors.grayXLight};
  }
  ::-webkit-scrollbar-track:active {
    background: ${secondaryColors.grayDarker};
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

