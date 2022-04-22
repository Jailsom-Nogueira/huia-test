// Libs
import { render } from '@testing-library/react';
import { products } from '../../common/mocks';
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext';
// Self
import { ProdThumbContainer } from './ProdThumbContainer';
import * as CartHook from '../../hooks/CartHook/CartHook'

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('ProdThumbContainer element', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shopCart: products,
      setShopCart: jest.fn(),
    })
  })
  test('ProductCard element renders', () => {
    jest.spyOn(CartHook, 'CartHook').mockImplementation(() => ({
      addProduct: jest.fn(),
    }))
  });

  test('ProdThumbContainer element renders', () => {
    render(<ProdThumbContainer />);
  });
});
