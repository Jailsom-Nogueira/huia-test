// Libs
import { FC } from 'react'
import { Button, RatingStars } from '../../components';
// Self
import * as S from './styles';
// Assets
import robotImage from '../../common/assets/images/full/robot-image.svg';

interface ProductCardProps {
  productTitle: string;
  productDescription: string;
  productPrice: number;
};

export const ProductCard: FC<ProductCardProps> = ({
  productTitle,
  productDescription,
  productPrice
}) => (
  <S.Container >
    <img src={robotImage} alt={`Product ${productTitle}`}/>
    <S.ProductDetails>
      <h1>{productTitle}</h1>
      <p>{productDescription}</p>
    </S.ProductDetails>
    <S.ProductFooter>
      <RatingStars />
      <p>
        {`${productPrice.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        })}`}
      </p>
    </S.ProductFooter>
    <Button 
      buttonText='ADICIONAR AO CARRINHO'
      buttonColor='green'
    />
  </S.Container>
);
