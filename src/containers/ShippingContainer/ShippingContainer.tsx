// Self
import * as S from './styles';
import { Input } from '../../components';
// import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'

export function ShippingContainer(): JSX.Element {
  // const { shopCartTotal, cartModal } = useShopCartHook()

  // const frete = 15
  return (
    <S.Container>
      <h3>Calcular Frete:</h3>
      <Input placeholder='Digite aqui o CEP de entrega'/>
    </S.Container>
  )
};
