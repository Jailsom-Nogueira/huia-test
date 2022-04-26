// Self
import * as S from './styles';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'

export function TotalText(): JSX.Element {
  const { shopCartTotal, cartModal, shipping } = useShopCartHook()

  return (
    <S.Container textAlign={!cartModal ? 'end' : 'start'}>
      <p>total</p>
      <p>
        {`${(shopCartTotal + shipping).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        })}`}
      </p>
    </S.Container>
  )
};
