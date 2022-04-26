// Libs
import { useCallback } from 'react';
// Self
import { ProductCardProps } from '../../common/interfaces/IProducts';
import { useShopCartContext } from '../../context/ShopCartContext/ShopCartContext'

export const useCartHook = () => {
  const {
    shopCart,
    shopCartTotal,
    setShopCartTotal,
    setShipping,
    setShopCart
  } = useShopCartContext()

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
    
    setShipping(0)
    setShopCartTotal(total)
  },[
    shopCart, 
    shopCartTotal,
    setShipping,
    setShopCart,
    setShopCartTotal
  ])

  const checkout = useCallback (() => {
    const total = 0
    setShopCartTotal(total)

    const cart: ProductCardProps[] = []
    setShopCart(cart)

    const shipping = 0
    setShipping(shipping)
  },[
    setShopCart,
    setShipping,
    setShopCartTotal
  ])

  return {
    checkout,
    addProduct,
    removeProduct
  }
};