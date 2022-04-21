// Libraries
import { FC } from 'react'
// Self
import * as S from './styles'
import { 
  Banner,
  CartTitle
} from '../../components'
import { ProductsContainer } from '../../containers';
// Assets
import comicsBanner from '../../common/assets/images/full/comics-banner-image.svg';

export const HomePage: FC = () => {
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
      </S.CartWrapper>
    </S.Container>
  )
}