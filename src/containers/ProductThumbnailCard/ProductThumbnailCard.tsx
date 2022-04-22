// Self
import * as S from './styles';
import { ProductProps } from '../../common/interfaces/IProducts';
// Assets
import robotThumbnail from '../../common/assets/images/thumbnails/robot-thumbnail.svg';

export function ProductThumbnailCard({ product }: ProductProps): JSX.Element {

  return (
    <S.Container>
      <S.ImageWrapper>
        <img src={robotThumbnail} alt={`Product ${product.productTitle}`}/>
      </S.ImageWrapper>

      <S.ProductDetails>
        <S.TextWrapper>
          <h1>{product.productTitle}</h1>
          <p>{product.productDescription}</p>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <button>- 03 +</button>
        </S.ButtonWrapper>
      </S.ProductDetails>
    </S.Container>
  )
};
