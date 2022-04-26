// Libs
import { render } from '@testing-library/react';
import { products } from '../../common/mocks';
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext';
// Self
import { ProdThumbContainer } from './ProdThumbContainer';
import * as CartHook from '../../hooks/CartHook/useCartHook'

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('ProdThumbContainer element', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shopCart: products,
      shopCartTotal: 10,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
  })
  test('ProdThumbContainer element renders', () => {
    jest.spyOn(CartHook, 'useCartHook').mockImplementation(() => ({
      checkout: jest.fn(),
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
    }))

    render(<ProdThumbContainer />);
  });
});
