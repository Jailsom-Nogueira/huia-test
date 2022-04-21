// Libs
import { FC } from 'react'
// Self
import { ProductCard } from '../ProductCard';
import { ProductsWrapper } from './styles';
// Mocks
import { products } from '../../common/mocks/products';

export const ProductsContainer: FC = () => (
  <ProductsWrapper>
    {products.map(product => {
      return(
        <ProductCard 
          key={product.productId}
          productTitle= {product.productTitle}
          productDescription= {product.productDescription}
          productPrice= {product.productPrice}
        />
      )
    })}
  </ProductsWrapper>
);
