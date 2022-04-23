// Self
import * as S from './styles';
import { ProductProps } from '../../common/interfaces/IProducts';
import { CartHook } from '../../hooks/CartHook/CartHook';

export function ProductThumbnailCard({ product }: ProductProps): JSX.Element {
  const { removeProduct, addProduct } = CartHook()
  
  return (
    <S.Container>
      <S.ImageWrapper>
        <img src={product.productThumbnail} alt={`Product ${product.productTitle}`}/>
      </S.ImageWrapper>

      <S.ProductDetails>
        <S.TextWrapper>
          <h1>{product.productTitle}</h1>
          <p>{product.productDescription}</p>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <button onClick={() => removeProduct(product)}>- </button>
          <p>{product.productQuantity}</p>
          <button onClick={() => addProduct(product)}> +</button>
        </S.ButtonWrapper>
      </S.ProductDetails>
    </S.Container>
  )
};
