// Libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Self
import { HomePage } from './HomePage'
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext';
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('<HomePage />', () => {
  test('HomePage desktop default page render', () => {
    mockedShopCartContext.mockReturnValue({
      shipping: 10,
      cartModal: false,
      shopCartTotal: 10,
      shopCart: products,
      setShopCart: jest.fn(),
      setCartModal: jest.fn(),
      setShopCartTotal: jest.fn(),
    })

    render(<HomePage />)
  })

  test('HomePage mobile page render', () => {
    mockedShopCartContext.mockReturnValue({
      shipping: 10,
      cartModal: false,
      shopCartTotal: 10,
      shopCart: products,
      setShopCart: jest.fn(),
      setCartModal: jest.fn(),
      setShopCartTotal: jest.fn(),
    })

    window = Object.assign(window, { innerWidth: 600})
    render(<HomePage />)

    userEvent.click(screen.getByText('Carrinho'))
  })

  test('HomePage mobile page render with modal', () => {
    mockedShopCartContext.mockReturnValue({
      shipping: 10,
      cartModal: true,
      shopCartTotal: 10,
      shopCart: products,
      setShopCart: jest.fn(),
      setCartModal: jest.fn(),
      setShopCartTotal: jest.fn(),
    })

    window = Object.assign(window, { innerWidth: 600})
    render(<HomePage />)

    userEvent.click(screen.getByAltText('close-cart-modal-button'))
  })

  test('HomePage mobile page render with CartEmpty component', () => {
    mockedShopCartContext.mockReturnValue({
      shipping: 10,
      shopCart: [],
      cartModal: true,
      shopCartTotal: 10,
      setShopCart: jest.fn(),
      setCartModal: jest.fn(),
      setShopCartTotal: jest.fn(),
    })

    window = Object.assign(window, { innerWidth: 600})
    render(<HomePage />)

    userEvent.click(screen.getByAltText('close-cart-modal-button'))
  })
})
