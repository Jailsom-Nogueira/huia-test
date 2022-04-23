// Self
import * as CartHook from './CartHook'
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('ProductCard element', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shopCart: products,
      shopCartTotal: 0,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
  })
  test('ProductCard element renders', () => {
    jest.spyOn(CartHook, 'CartHook').mockImplementation(() => ({
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
    }))
  });
});
