// Libraries
import { FC } from 'react'
// Self
import * as S from './styles'
import { 
  Banner
} from '../../components'
import { ProductCard } from '../../containers';
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

        <S.ProductsWrapper>
          <ProductCard 
            productTitle= 'titulo'
            productDescription= 'descr'
            productPrice= {204}
          />

          <ProductCard 
            productTitle= 'titulo'
            productDescription= 'descr'
            productPrice= {204}
          />

          <ProductCard 
            productTitle= 'titulo'
            productDescription= 'descr'
            productPrice= {204}
          />

          <ProductCard 
            productTitle= 'titulo'
            productDescription= 'descr'
            productPrice= {204}
          />

          <ProductCard 
            productTitle= 'titulo'
            productDescription= 'descr'
            productPrice= {204}
          />

          <ProductCard 
            productTitle= 'titulo'
            productDescription= 'descr'
            productPrice= {204}
          />
          
        </S.ProductsWrapper>
      </S.MainWrapper>
      <S.CartWrapper> teste </S.CartWrapper>
    </S.Container>
  )
}
