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
    const cart = [...shopCart]

    const productAlreadyExistsOnCart = cart.find(
      updatedCartProduct => updatedCartProduct.productId === product.productId,
    );

    const currentQuantity = productAlreadyExistsOnCart
    ? productAlreadyExistsOnCart.productQuantity
    : 0;
  
    const quantity = currentQuantity + 1;

    if (productAlreadyExistsOnCart) {
      productAlreadyExistsOnCart.productQuantity = quantity;
    } else {
      const newProduct = {
        ...product,
        productQuantity: 1,
      };

      setShopCart([...cart, newProduct])
    }

    setShopCartTotal(total)
  },[
    shopCart, 
    shopCartTotal, 
    setShopCart, 
    setShopCartTotal
  ])
  
  const removeProduct = useCallback ((product: ProductCardProps) => {
    const total = shopCartTotal - product.productPrice
    const cart = [...shopCart]

    const productAlreadyExistsOnCart = cart.find(
      updatedCartProduct => updatedCartProduct.productId === product.productId,
    );

    const currentQuantity = productAlreadyExistsOnCart
    ? productAlreadyExistsOnCart.productQuantity
    : 0;
  
    const quantity = currentQuantity - 1;

    if (productAlreadyExistsOnCart && productAlreadyExistsOnCart.productQuantity === 1) {
      const productIndex = cart.findIndex(
        updatedCartProduct => updatedCartProduct.productId === product.productId,
      );
      cart.splice(productIndex, 1);

      setShopCart(cart);
    }else {
      if (productAlreadyExistsOnCart) {
        productAlreadyExistsOnCart.productQuantity = quantity;
      } 
    }

    setShopCartTotal(total)
  },[
    shopCart, 
    shopCartTotal, 
    setShopCart, 
    setShopCartTotal
  ])

  const checkout = useCallback (() => {
    const total = 0
    setShopCartTotal(total)

    const cart: ProductCardProps[] = []
    setShopCart(cart)
  },[
    setShopCart, 
    setShopCartTotal
  ])

  return {
    checkout,
    addProduct,
    removeProduct
  }
};