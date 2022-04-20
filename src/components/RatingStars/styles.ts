// Libs
import styled from 'styled-components';
// Self
import { 
  spacings, 
  secondaryColors 
} from '../../common/styles/theme';

interface ButtonProps {
  buttonSwitch: 'on' | 'off';
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${spacings.space04};
`;

export const ButtonStar = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${
    secondaryColors.purple
  }
`;
