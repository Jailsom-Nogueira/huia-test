// Libraries
import { FC } from 'react'
// Self
import * as S from './styles'
import { 
  Banner, 
  Button, 
  RatingStars 
} from '../../components'
// Assets
import comicsBanner from '../../common/assets/images/full/comics-banner-image.svg';
import { ProductCard } from '../../containers';

export const HomePage: FC = () => {
  return (
    <S.Container>
      <ProductCard 
        productTitle= 'titulo'
        productDescription= 'descr'
        productPrice= {204}
      />
      <Banner 
        imageSrc={comicsBanner}
        bannerText='Huia - Teste Desenvolvimento Front-End'
      ></Banner>
      <RatingStars />
      <RatingStars />
      <RatingStars />
      <RatingStars />
      <RatingStars />
      <Button 
        buttonText='ADICIONAR AO CARRINHO'
        buttonColor='green'
      />
    </S.Container>
  )
}
