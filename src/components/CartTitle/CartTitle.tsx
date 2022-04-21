// Libs
import { FC } from 'react';
// Self
import { Container } from './styles';
// Assets
import shoppingCartIcon from '../../common/assets/icons/shopping-cart-icon.svg'

export const CartTitle: FC = () => {
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
