// Libs
import { 
  useState, 
  createContext, 
  useContext, 
  ReactNode 
} from 'react';
// Self
import { ProductCardProps } from '../../common/interfaces/IProducts';

export const ShopCartContext = createContext<IShopCartContextData>(
  {} as IShopCartContextData
);

interface IShopCartContext {
  children: ReactNode;
};

interface IShopCartContextData {
  shipping: number;
  cartModal: boolean;
  shopCartTotal: number;
  shopCart: ProductCardProps[];
  setShipping: (event: number) => void;
  setCartModal: (event: boolean) => void;
  setShopCartTotal: (event: number) => void;
  setShopCart: (event: ProductCardProps[]) => void;
};

export function ShopCartHook({ children }: IShopCartContext): JSX.Element {
  const [shopCart, setShopCart] = useState<ProductCardProps[]>([]);
  const [shopCartTotal, setShopCartTotal] = useState<number>(0);
  const [cartModal, setCartModal] = useState<boolean>(false);
  const [shipping, setShipping] = useState<number>(0);

  return (
    <ShopCartContext.Provider
      value={{
        shopCart,
        shipping,
        cartModal,
        shopCartTotal,
        setShopCartTotal,
        setCartModal,
        setShipping,
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