// Libs
import styled from 'styled-components';
// Self
import { 
  font, 
  primaryColors, 
  secondaryColors 
} from '../../common/styles/theme';

interface ButtonProps {
  buttonColor: 'green' | 'purple';
};

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  border: none;

  font-size: ${font.sizes.xSmall};
  font-weight: ${font.semiBold};
  color: ${primaryColors.white};

  background-color: ${props => 
    props.buttonColor === 'green' ? 
    secondaryColors.green : 
    secondaryColors.purple
  };

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: 0 0.5px gray;
    transform: translateY(0.5px);
  }
`;
