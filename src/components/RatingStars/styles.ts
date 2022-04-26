// Libs
import styled from 'styled-components';
// Self
import { 
  font,
  spacings, 
  secondaryColors
} from '../../common/styles/theme';

interface ButtonProps {
  buttonSwitch: 'on' | 'off';
};

export const Container = styled.div`
  display: flex;
  column-gap: 0.1rem;
  justify-content: center;
  align-items: center;
  
  height: ${spacings.space04};
`;

export const ButtonStar = styled.button<ButtonProps>`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${secondaryColors.purple};
  background-color: transparent;

  img{
   width: ${font.sizes.xSmall};
  }
`;
