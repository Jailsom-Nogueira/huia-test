// Self
import * as S from './styles';
import { TotalText } from '../TotalText';
import { Button } from '../../components';
import { CartHook } from '../../hooks/CartHook/CartHook'
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'

export function TotalsContainer(): JSX.Element {
  const {
    shipping,
    shopCartTotal,
  } = useShopCartHook()
  const { checkout } = CartHook()

  return (
    <S.Container>
      <S.TotalsWrapper>
        <S.SubTotalsTexts>
          <p>subtotal</p>
          <p>
            {`${shopCartTotal.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}`}
          </p>
        </S.SubTotalsTexts>

        <S.SubTotalsTexts>
          <p>frete</p>
          <p>
            {`${shipping.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}`}
          </p>
        </S.SubTotalsTexts>
        
        <TotalText />

        <S.CheckoutWrapper>
          <Button 
            buttonText='FINALIZAR COMPRA'
            buttonColor='purple'
            onClick={() => checkout()}
          />
        </S.CheckoutWrapper>
      </S.TotalsWrapper>
    </S.Container>
  )
};
