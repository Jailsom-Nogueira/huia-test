// Libs
import { useCallback } from 'react';
// Self
import { ProductCardProps } from '../../common/interfaces/IProducts';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'

export const CartHook = () => {
  const {
    shopCart,
    shopCartTotal,
    setShopCartTotal,
    setShopCart
  } = useShopCartHook()

  const addProduct = useCallback ((product: ProductCardProps) => {
    const total = shopCartTotal + product.productPrice

    setShopCartTotal(total)
    setShopCart([...shopCart, product])
  },[
    shopCart, 
    shopCartTotal, 
    setShopCart, 
    setShopCartTotal
  ])
  
  return {
    addProduct
  }
};