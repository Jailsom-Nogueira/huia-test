// Libs
import styled from 'styled-components';
// Self
import { primaryColors, secondaryColors } from '../../common/styles/theme';

export const IconButtonContainer = styled.button`
  border: none;
  background-color: ${ primaryColors.white };

  transition: 0.3s;
  
  &:hover {
    opacity: 0.9;
    background-color: ${ secondaryColors.grayXLight };
  }

  &:active {
    box-shadow: 0 0.5px gray;
    transform: translateY(0.5px);
  }
`;
