// Self
import * as S from './styles';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'
import { TotalText } from '../TotalText';

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
        
        <TotalText />
      </S.TotalsWrapper>
    </S.Container>
  )
};
