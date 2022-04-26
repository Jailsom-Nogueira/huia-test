// Self
import * as ShippingHook from './useShippingHook';
import * as CartHook from '../CartHook/useCartHook';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext';
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('ShippingHook Hook', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      cartModal: true,
      shopCartTotal: 10,
      shopCart: products,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
  })
  test('ShippingHook Hook', () => {
    jest.spyOn(CartHook, 'useCartHook').mockImplementation(() => ({
      checkout: jest.fn(),
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
    }))
    jest.spyOn(ShippingHook, 'useShippingHook').mockImplementation(() => ({
      getShippingAmount: jest.fn(),
      fetchShipping: jest.fn(),
    }))
  });
});
