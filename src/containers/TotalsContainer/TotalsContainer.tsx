// Self
import * as S from './styles';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'

export function TotalsContainer(): JSX.Element {
  const {
    shopCartTotal
  } = useShopCartHook()

  const frete = 15
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
            {`${frete.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}`}
          </p>
        </S.SubTotalsTexts>
        <S.TotalsTexts>
          <p>total</p>
          <p>
            {`${(shopCartTotal + frete).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}`}
          </p>
        </S.TotalsTexts>
      </S.TotalsWrapper>
    </S.Container>
  )
};
