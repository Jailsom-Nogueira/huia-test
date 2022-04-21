// Libs
import { useState, createContext, FC } from 'react';
// Self
import { ProductCardProps } from '../../common/interfaces/IProducts';

export const ShopCartContext = createContext(
  {} as IShopCartContext
);

interface IShopCartContext {
  shopCart?: ProductCardProps[];
  setShopCart?: (event: any) => void;
  children?: React.ReactNode;
};

export const ShopCartHook: FC<IShopCartContext> = ({ children }) => {
  const [shopCart, setShopCart] = useState<ProductCardProps[]>([]);

  return (
    <ShopCartContext.Provider
      value={{
        shopCart,
        setShopCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};