// Libs
import { FC, ButtonHTMLAttributes } from 'react';
// Self
import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonColor: 'green' | 'purple';
  buttonText?: string;
  textColor?: string;
  children?: React.ReactNode;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({
  children,
  buttonText,
  buttonColor,
  onClick
}) => (
  <ButtonContainer 
    onClick={onClick}
    buttonColor={buttonColor}
    data-testid='button-component-1'
  >
    <p>{buttonText}</p>
    {children}
  </ButtonContainer>
);
