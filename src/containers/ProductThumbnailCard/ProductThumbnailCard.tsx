// Self
import * as S from './styles';
import { ProductProps } from '../../common/interfaces/IProducts';
import { HandleCartQuantity } from '../HandleCartQuantity/HandleCartQuantity';

export function ProductThumbnailCard({ product }: ProductProps): JSX.Element { 
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

        <HandleCartQuantity product={product}/>
      </S.ProductDetails>
    </S.Container>
  )
};
