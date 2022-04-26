// Self
import * as WindowHook from './WindowHook'
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext'
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('WindowHook Hook', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shopCart: products,
      shopCartTotal: 0,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
  })
  test('WindowHook Hook', () => {
    jest.spyOn(WindowHook, 'WindowHook').mockImplementation(() => ({
      width: 10
    }))
  });
});
