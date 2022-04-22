// Libs
import { useCallback } from 'react';
// Self
import { ProductCardProps } from '../../common/interfaces/IProducts';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'

export const CartHook = () => {
  const {
    shopCart,
    setShopCart
  } = useShopCartHook()

  const addProduct = useCallback ((product: ProductCardProps) => {
    setShopCart([...shopCart, product])
  },[shopCart, setShopCart])

  return {
    addProduct
  }
};