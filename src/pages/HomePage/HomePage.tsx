// Self
import * as S from './styles'
import { Banner, CartTitle } from '../../components'
import { CartEmpty } from '../../components/CartEmpty/CartEmpty';
import { 
  ProdThumbContainer, 
  ProductsContainer, 
  TotalsContainer 
} from '../../containers';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext';
import { WindowHook } from '../../hooks/WindowHook/WindowHook';
// Assets
import comicsBanner from '../../common/assets/images/full/comics-banner-image.svg';
import { TotalText } from '../../containers/TotalText';

export function HomePage(): JSX.Element {
  const { shopCart } = useShopCartHook()
  const { width } = WindowHook()

  const responsiveCart = ( width > 768 ) ?
  (
    <S.CartWrapper>
      <S.CartTitleWrapper>
        <CartTitle/>
      </S.CartTitleWrapper>
      <S.Cart>
        {shopCart.length ? <ProdThumbContainer /> : <CartEmpty />}
      </S.Cart>
      <TotalsContainer />
    </S.CartWrapper>
  ) : 
  (
    <S.CartTitleWrapper>
      <CartTitle/>
      <TotalText />
    </S.CartTitleWrapper>
  )

  return (
    <S.Container>
      <S.MainWrapper>
        <Banner 
          imageSrc={comicsBanner}
          bannerText='Huia - Teste Desenvolvimento Front-End'
        />
        <ProductsContainer/>          
      </S.MainWrapper>
      {responsiveCart}
    </S.Container>
  )
}