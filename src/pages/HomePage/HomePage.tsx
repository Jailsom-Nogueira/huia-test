// Libraries
import { FC } from 'react'
// Self
import * as S from './styles'
import Button from '../../components/Button'
import Banner from '../../components/Banner'
import comicsBanner from '../../common/assets/images/comics-banner.svg';

export const HomePage: FC = () => {
  return (
    <S.Container>
      <Banner 
        imageSrc={comicsBanner}
        bannerText='Huia - Teste Desenvolvimento Front-End'
      ></Banner>
      <Button >
        <p>ADICIONAR AO CARRINHO</p>
      </Button>
    </S.Container>
  )
}
