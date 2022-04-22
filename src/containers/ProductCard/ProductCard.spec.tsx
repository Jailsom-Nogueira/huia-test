// Libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Self
import { ProductCard } from './ProductCard';
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext'
// Mocks
import { product, products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('ProductCard element', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shopCart: products,
      setShopCart: jest.fn(),
    })
  })

  test('Button element renders and click', () => {
    render(<ProductCard product={product} />);
  
    userEvent.click(screen.getByTestId('button-component-1'))
    expect(screen.getByTestId('button-component-1')).toBeInTheDocument
  })
});
