// Libs
import React, { ButtonHTMLAttributes } from 'react';
// Self
import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonColor: 'green' | 'purple';
  buttonText?: string;
  textColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  buttonColor,
  buttonText
}) => (
  <ButtonContainer 
    buttonColor={buttonColor}
  >
    <p>{buttonText}</p>
  </ButtonContainer>
);

export default Button;
