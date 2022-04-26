// Self
import * as CartHook from './useCartHook'
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('CartHook Hook', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shopCart: products,
      shopCartTotal: 0,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
  })
  test('CartHook Hook', () => {
    jest.spyOn(CartHook, 'useCartHook').mockImplementation(() => ({
      checkout: jest.fn(),
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
    }))
  });
});
