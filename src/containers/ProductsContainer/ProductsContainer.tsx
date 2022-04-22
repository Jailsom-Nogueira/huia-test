// Self
import { ProductCard } from '../ProductCard';
import * as S from './styles';
// Mocks
import { products } from '../../common/mocks';

export function ProductsContainer(): JSX.Element {
  return (
    <S.ProductsWrapper>
      {products.map(product => {
        return(
          <S.Container key={product.productId}>
            <ProductCard 
              product= {product}
            />
          </S.Container>
        )
      })}
    </S.ProductsWrapper>
  )
};
