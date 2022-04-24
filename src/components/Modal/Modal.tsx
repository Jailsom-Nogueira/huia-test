// Self
import * as S from './styles';

type ModalProps = {
  children?: React.ReactNode;
};

export function Modal({
    children
  }: ModalProps): JSX.Element {
    return (
      <S.Container
        data-testid='modal-component-1'
      >
        {children}
      </S.Container>
    );
  };
