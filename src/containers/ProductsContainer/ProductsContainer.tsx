// Self
import { ProductCard } from '../ProductCard';
import * as S from './styles';
// Mocks
import { products } from '../../common/mocks';

export function ProductsContainer(): JSX.Element {
  return (
    <S.Container>
      {products.map(product => {
        return(
          <S.ProductsWrapper key={product.productId}>
            <ProductCard 
              product= {product}
            />
          </S.ProductsWrapper>
        )
      })}
    </S.Container>
  )
};
