// Libs
import { Key } from 'react';
// Self
import { useShopCartContext } from '../../context/ShopCartContext/ShopCartContext';
import { ProductCardProps } from '../../common/interfaces/IProducts';
import { ProductThumbnailCard } from '../ProductThumbnailCard';
import * as S from './styles';

export function ProdThumbContainer(): JSX.Element {
  const {
    shopCart
  } = useShopCartContext()
  
  return (
    <S.Container>
      {shopCart.map((product: ProductCardProps, i: Key | null | undefined) => {
        return(
          <S.ProductsWrapper key={i}>
            <ProductThumbnailCard 
              product= {product}
            />
          </S.ProductsWrapper>
        )
      })}
    </S.Container>
  )
};
