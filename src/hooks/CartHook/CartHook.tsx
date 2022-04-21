// Libs
import { useCallback, useContext } from 'react';
// Self
import { ProductCardProps } from '../../common/interfaces/IProducts';
import { ShopCartContext } from '../../context/ShopCartContext/ShopCartContext'

export const CartHook = () => {
  const {
    shopCart,
    setShopCart
  } = useContext(ShopCartContext)

  const addProduct = useCallback ((product: ProductCardProps) => {
    shopCart && shopCart.push(product)
    setShopCart && setShopCart(shopCart)
    console.log(shopCart)
  },[shopCart, setShopCart])

  return {
    addProduct
  }
};