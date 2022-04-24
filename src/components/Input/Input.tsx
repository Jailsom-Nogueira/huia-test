// Self
import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
};

export function Input({placeholder}: InputProps): JSX.Element {
    return (
      <Container
        placeholder={placeholder}
        data-testid='button-component-1'
      />
    );
  };
