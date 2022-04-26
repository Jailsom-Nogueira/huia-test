// Libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Self
import { TotalsContainer } from './TotalsContainer';
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext';
// Mocks
import { products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('TotalsContainer element', () => {
  test('TotalsContainer checkout click', () => {
    mockedShopCartContext.mockReturnValue({
      shipping: 10,
      cartModal: false,
      shopCartTotal: 10,
      shopCart: products,
      setShipping: jest.fn(),
      setShopCart: jest.fn(),
      setCartModal: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
    
    render(<TotalsContainer />)

    userEvent.click(screen.getByText('FINALIZAR COMPRA'))
  })
});
