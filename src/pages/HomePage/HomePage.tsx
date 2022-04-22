// Self
import * as S from './styles'
import { Banner, CartTitle } from '../../components'
import { CartEmpty } from '../../components/CartEmpty/CartEmpty';
import { ProdThumbContainer, ProductsContainer } from '../../containers';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext';
// Assets
import comicsBanner from '../../common/assets/images/full/comics-banner-image.svg';


export function HomePage(): JSX.Element {
  const {
    shopCart
  } = useShopCartHook()
  
  return (
    <S.Container>
      <S.MainWrapper>
        <Banner 
          imageSrc={comicsBanner}
          bannerText='Huia - Teste Desenvolvimento Front-End'
        />
        <ProductsContainer/>          
      </S.MainWrapper>
      
      <S.CartWrapper> 
        <CartTitle/>
        <S.Cart>
          {shopCart.length ? <ProdThumbContainer /> : <CartEmpty />}
        </S.Cart>  
      </S.CartWrapper>
    </S.Container>
  )
}