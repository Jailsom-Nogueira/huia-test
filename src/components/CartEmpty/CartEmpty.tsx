// Self
import { Container } from './styles';

export function CartEmpty(): JSX.Element {
  return (
    <Container>
      <h1>Você não possui produtos no carrinho.</h1>
    </Container>
  );
};
