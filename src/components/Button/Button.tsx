// Libs
import { FC, ButtonHTMLAttributes } from 'react';
// Self
import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonColor: 'green' | 'purple';
  buttonText?: string;
  textColor?: string;
};

export const Button: FC<ButtonProps> = ({
  buttonColor,
  buttonText
}) => (
  <ButtonContainer 
    buttonColor={buttonColor}
  >
    <p>{buttonText}</p>
  </ButtonContainer>
);
