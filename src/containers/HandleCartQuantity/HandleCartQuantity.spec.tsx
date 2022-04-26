// Libs
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Self
import { HandleCartQuantity } from './HandleCartQuantity';
import { 
  useShopCartContext
} from '../../context/ShopCartContext/ShopCartContext'
// Mocks
import { product, products } from '../../common/mocks';

const mockedShopCartContext = useShopCartContext as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('HandleCartQuantity element', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shipping:10,
      shopCartTotal: 10,
      shopCart: products,
      setShipping: jest.fn(),
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
  })

  test('Add one and remove the product', () => {
    render(<HandleCartQuantity product={product} />);

    userEvent.click(screen.getByAltText('Add product icon'))
    userEvent.click(screen.getByAltText('Remove the product icon'))
    expect(screen.getByText('00')).toBeInTheDocument
  });

  test('Remove one product with quantity 2', () => {
    render(<HandleCartQuantity product={{...product, productQuantity: 2}} />);

    userEvent.click(screen.getByAltText('Remove one product icon'))
    expect(screen.getByText('02')).toBeInTheDocument
  });

  test('Add one product', () => {
    render(<HandleCartQuantity product={{...product, productQuantity: 1}} />);

    userEvent.click(screen.getByAltText('Add product icon'))
    expect(screen.getByText('01')).toBeInTheDocument
  });

  test('Remove one product with quantity 1', () => {
    render(<HandleCartQuantity product={{...product, productQuantity: 1}} />);

    userEvent.click(screen.getByAltText('Remove the product icon'))
    expect(screen.getByText('01')).toBeInTheDocument
  });

  test('Trying to remove one product with quantity 0', () => {
    render(<HandleCartQuantity product={{...product, productQuantity: 0}} />);

    userEvent.click(screen.getByAltText('Remove the product icon'))
    expect(screen.getByText('00')).toBeInTheDocument
  });

  test('Trying to remove one product with no products on the cart', () => {
    mockedShopCartContext.mockReturnValue({
      shopCart: [],
      shopCartTotal: 10,
      setShipping: jest.fn(),
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
    render(<HandleCartQuantity product={{...product, productQuantity: 0}} />);

    userEvent.click(screen.getByAltText('Remove the product icon'))
    expect(screen.getByText('00')).toBeInTheDocument
  });
});
