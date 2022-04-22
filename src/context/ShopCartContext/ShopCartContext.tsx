// Libs
import { useState, createContext, useContext, ReactNode } from 'react';
// Self
import { ProductCardProps } from '../../common/interfaces/IProducts';

export const ShopCartContext = createContext<IShopCartContextData>(
  {} as IShopCartContextData
);

interface IShopCartContext {
  children: ReactNode;
};

interface IShopCartContextData {
  shopCart: ProductCardProps[];
  setShopCart: (event: any) => void;
};

export function ShopCartHook({ children }: IShopCartContext): JSX.Element {
  const [shopCart, setShopCart] = useState<ProductCardProps[]>([]);

  return (
    <ShopCartContext.Provider
      value={{
        shopCart,
        setShopCart
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

export function useShopCartHook(): IShopCartContextData {
  const context = useContext(ShopCartContext);

  return context;
}