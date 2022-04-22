// Libraries
import { FC, useContext } from 'react'
// Self
import * as S from './styles'
import { 
  Banner,
  CartTitle
} from '../../components'
import { ProdThumbContainer, ProductsContainer } from '../../containers';
// Assets
import comicsBanner from '../../common/assets/images/full/comics-banner-image.svg';
import { ShopCartContext } from '../../context/ShopCartContext/ShopCartContext';

export const HomePage: FC = () => {
  const {
    shopCart,
    setShopCart,
  } = useContext(ShopCartContext)
  
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
          <ProdThumbContainer />
        </S.Cart>  
      </S.CartWrapper>
    </S.Container>
  )
}