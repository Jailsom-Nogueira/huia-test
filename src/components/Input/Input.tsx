// Self
import { ChangeEvent, InputHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  type?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
};

export function Input({
  placeholder,
  onChange,
  onKeyDown
}: InputProps): JSX.Element {
    return (
      <Container
        placeholder={placeholder}
        data-testid='input-component-1'
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
  };
