// Libs
import { FC, useState } from 'react'
import { Button, RatingStars } from '../../components';
// Self
import * as S from './styles';
// Assets
import robotImage from '../../common/assets/images/full/robot-image.svg';

interface ProductCardProps {
  productDescription: string;
  productTitle: string;
  productPrice: number;
  productId: string;
};

interface ProductProps {
  product: ProductCardProps 
};

export const ProductCard: FC<ProductProps> = ({
  product
}) => {
  const [shopCart, setShopCart] = useState<any>([]);
  // console.log(shopCart)
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
        onClick={() => setShopCart([...shopCart, product])}
      />
    </>
  )
};
