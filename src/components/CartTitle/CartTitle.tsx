// Self
import { Container } from './styles';
// Assets
import shoppingCartIcon from '../../common/assets/icons/shopping-cart-icon.svg'

export function CartTitle(): JSX.Element {
  return (
    <Container>
      <img
        src={shoppingCartIcon}
        alt={'Shopping cart icon'}
      />
      <h1>Carrinho</h1>
    </Container>
  );
};
