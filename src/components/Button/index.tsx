// Libs
import React, { ButtonHTMLAttributes } from 'react';
// Self
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  children
}) => (
  <Container>
    {children}
  </Container>
);

export default Button;
