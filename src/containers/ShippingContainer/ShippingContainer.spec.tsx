// Libs
import { render } from '@testing-library/react';
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext';
// Self
import { ShippingContainer } from './ShippingContainer';
import * as CartHook from '../../hooks/CartHook/CartHook'
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('TotalsText element', () => {
  test('TotalsText element renders, cartModal true', () => {
    // mockedShopCartContext.mockReturnValue({
    //   cartModal: true,
    //   shopCartTotal: 10,
    //   shopCart: products,
    //   setShopCart: jest.fn(),
    //   setShopCartTotal: jest.fn(),
    // })
    // jest.spyOn(CartHook, 'CartHook').mockImplementation(() => ({
    //   checkout: jest.fn(),
    //   addProduct: jest.fn(),
    //   removeProduct: jest.fn(),
    // }))

    render(<ShippingContainer />);
  });

  // test('TotalsText element renders, cartModal false', () => {
  //   mockedShopCartContext.mockReturnValue({
  //     cartModal: false,
  //     shopCartTotal: 10,
  //     shopCart: products,
  //     setShopCart: jest.fn(),
  //     setShopCartTotal: jest.fn(),
  //   })

  //   jest.spyOn(CartHook, 'CartHook').mockImplementation(() => ({
  //     checkout: jest.fn(),
  //     addProduct: jest.fn(),
  //     removeProduct: jest.fn(),
  //   }))

  //   render(<Shipping />);
  // });
});
