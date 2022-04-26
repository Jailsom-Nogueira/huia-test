// Libs
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Self
import { ProductCard } from './ProductCard';
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext'
import * as CartHook from '../../hooks/CartHook/CartHook'
// Mocks
import { product, products } from '../../common/mocks';

const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('ProductCard element', () => {
  test('ProductCard element renders and click', () => {
    mockedShopCartContext.mockReturnValue({
      shopCart: products,
      shopCartTotal: 10,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
    render(<ProductCard product={product} />);
  
    userEvent.click(screen.getByTestId('button-component-1'))
    expect(screen.getByTestId('button-component-1')).toBeInTheDocument
  })

  test('ProductCard element productQuantity > 0 ', () => {
    mockedShopCartContext.mockReturnValue({
      shopCart: [],
      shopCartTotal: 10,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
    
    const { getAllByTestId } = render(<ProductCard product={product} />);
    
    const [button] = getAllByTestId('button-component-1');

    fireEvent.click(button);
  });
});
