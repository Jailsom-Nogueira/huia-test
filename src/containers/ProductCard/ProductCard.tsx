// Libs
import { Button, RatingStars } from '../../components';
// Self
import * as S from './styles';
import { CartHook } from '../../hooks/CartHook/CartHook'
import { ProductProps } from '../../common/interfaces/IProducts';

export function ProductCard({ product }: ProductProps): JSX.Element {
  const { addProduct } = CartHook()
  
  return (
    <>
      <img src={`${product.productImage}`} alt={`Product ${product.productTitle}`} loading="lazy" />
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
        onClick={() => addProduct(product)}
      />
    </>
  )
};
