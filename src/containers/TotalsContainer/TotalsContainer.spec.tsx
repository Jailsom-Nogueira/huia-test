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
      cartModal: false,
      shopCart: products,
      shopCartTotal: 10,
      setShopCart: jest.fn(),
      setCartModal: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
    
    render(<TotalsContainer />)

    userEvent.click(screen.getByText('FINALIZAR COMPRA'))
  })
});
