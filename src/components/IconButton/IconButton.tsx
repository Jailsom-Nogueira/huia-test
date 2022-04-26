// Libs
import { ButtonHTMLAttributes } from 'react';
// Self
import { IconButtonContainer } from './styles';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  altText: string;
  icon: string;
  onClick: () => void;
};

export function IconButton({
    icon,
    altText,
    onClick
  }: IconButtonProps): JSX.Element {
    return (
      <IconButtonContainer
        onClick={onClick}
        data-testid='icon-button-component-1'
      >
        <img
          src={icon}
          alt={altText}
        />
      </IconButtonContainer>
    );
  };
