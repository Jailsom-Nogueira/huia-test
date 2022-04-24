// Self
import * as S from './styles';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'

export function TotalText(): JSX.Element {
  const { shopCartTotal, cartModal } = useShopCartHook()

  const frete = 15
  return (
    <S.Container textAlign={!cartModal ? 'end' : 'start'}>
      <p>total</p>
      <p>
        {`${(shopCartTotal + frete).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        })}`}
      </p>
    </S.Container>
  )
};
