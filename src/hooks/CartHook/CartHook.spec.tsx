// Self
import * as CartHook from './CartHook'
import { ShopCartHook } from '../../context/ShopCartContext/ShopCartContext'
// Mocks
import { product } from '../../common/mocks';

const mockedShopCartContext = ShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('ProductCard element', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shopCart: product,
      setShopCart: jest.fn(),
    })
  })
  test('ProductCard element renders', () => {
    jest.spyOn(CartHook, 'CartHook').mockImplementation(() => ({
      addProduct: jest.fn(),
    }))
  });
});
