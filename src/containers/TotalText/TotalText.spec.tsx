// Libs
import { render } from '@testing-library/react';
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext';
// Self
import { TotalText } from './TotalText';
import * as CartHook from '../../hooks/CartHook/CartHook'
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('TotalsContainer element', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shopCart: products,
      shopCartTotal: 10,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
  })
  
  test('TotalsContainer element renders', () => {
    jest.spyOn(CartHook, 'CartHook').mockImplementation(() => ({
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
    }))

    render(<TotalText />);
  });
});
