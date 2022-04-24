// Libs
import { ButtonHTMLAttributes } from 'react';
// Self
import { ButtonContainer } from './styles';

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string;
  altText: string;
  children?: React.ReactNode;
  onClick: () => void;
};

export function CloseButton({
    icon,
    altText,
    children,
    onClick
  }: CloseButtonProps): JSX.Element {
    return (
      <ButtonContainer
        onClick={onClick}
        data-testid={`${altText}`}
      >
        <img src={icon} alt={altText} />
        {children}
      </ButtonContainer>
    );
  };
