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
    try {
      const total = shopCartTotal + product.productPrice
      const cart = [...shopCart]

      const productAlreadyExistsOnCart = cart.find(
        updatedCartProduct => updatedCartProduct.productId === product.productId,
      );

      const currentQuantity = productAlreadyExistsOnCart
      ? productAlreadyExistsOnCart.productQuantity
      : 0;
    
      const quantity = currentQuantity && currentQuantity + 1;

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
    } catch {
      alert('Erro ao adicionionar o item ao carrinho.');
    }
  },[
    shopCart, 
    shopCartTotal, 
    setShopCart, 
    setShopCartTotal
  ])
  
  const removeProduct = useCallback ((product: ProductCardProps) => {
    try {
      const total = shopCartTotal - product.productPrice
      const cart = [...shopCart]

      const productAlreadyExistsOnCart = cart.find(
        updatedCartProduct => updatedCartProduct.productId === product.productId,
      );

      const currentQuantity = productAlreadyExistsOnCart
      ? productAlreadyExistsOnCart.productQuantity
      : 0;
    
      const quantity = currentQuantity && currentQuantity - 1;

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
    } catch {
      alert('Erro ao remover o item ao carrinho.');
    }
  },[
    shopCart, 
    shopCartTotal, 
    setShopCart, 
    setShopCartTotal
  ])

  return {
    addProduct,
    removeProduct
  }
};