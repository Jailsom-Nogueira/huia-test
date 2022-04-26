// Libs
import { render } from '@testing-library/react';
import { 
  useShopCartContext 
} from '../../context/ShopCartContext/ShopCartContext';
// Self
import { TotalText } from './TotalText';
import * as CartHook from '../../hooks/CartHook/useCartHook'
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartContext as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('TotalsText element', () => {
  test('TotalsText element renders, cartModal true', () => {
    mockedShopCartContext.mockReturnValue({
      cartModal: true,
      shopCartTotal: 10,
      shopCart: products,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
    jest.spyOn(CartHook, 'useCartHook').mockImplementation(() => ({
      checkout: jest.fn(),
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
    }))

    render(<TotalText />);
  });

  test('TotalsText element renders, cartModal false', () => {
    mockedShopCartContext.mockReturnValue({
      cartModal: false,
      shopCartTotal: 10,
      shopCart: products,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
    render(<TotalText />);
  });
});
