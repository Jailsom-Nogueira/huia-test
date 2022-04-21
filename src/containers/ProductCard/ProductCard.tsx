// Libs
import { FC } from 'react'
import { Button, RatingStars } from '../../components';
// Self
import * as S from './styles';
import { ProductProps } from '../../common/interfaces/IProducts';
import { CartHook } from '../../hooks/CartHook/CartHook'
// Assets
import robotImage from '../../common/assets/images/full/robot-image.svg';

export const ProductCard: FC<ProductProps> = ({
  product
}) => {
  const {
    addProduct
  } = CartHook()
  return (
    <>
      <img src={robotImage} alt={`Product ${product.productTitle}`}/>
      <S.ProductDetails>
        <h1>{product.productTitle}</h1>
        <p>{product.productDescription}</p>
      </S.ProductDetails>

      <S.ProductFooter>
        <RatingStars />
        <p>
          {`${product.productPrice.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
          })}`}
        </p>
      </S.ProductFooter>
      
      <Button 
        buttonText='ADICIONAR AO CARRINHO'
        buttonColor='green'
        onClick={() => 
          addProduct && 
          addProduct(product)}
      />
    </>
  )
};
