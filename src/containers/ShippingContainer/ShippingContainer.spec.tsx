// Libs
import { fireEvent, render, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
// Self
import { ShippingContainer } from './ShippingContainer';
import * as CartHook from '../../hooks/CartHook/useCartHook';
import { 
  useShopCartContext 
} from '../../context/ShopCartContext/ShopCartContext';
// Mocks
import { products } from '../../common/mocks';

const { act } = TestRenderer;
const mockedShopCartContext = useShopCartContext as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('Shipping element', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      shipping: 10,
      cartModal: true,
      shopCartTotal: 10,
      shopCart: products,
      setShipping: jest.fn(),
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
    jest.spyOn(CartHook, 'useCartHook').mockImplementation(() => ({
      checkout: jest.fn(),
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
    }))
  })

  test('Shipping input change', async () => {
    const { getByTestId } = render(<ShippingContainer />);

    const cepInput = getByTestId('input-component-1');
    await waitFor(() => {
      act(() => {
        fireEvent.change(cepInput, {
          target: {
            value: '29164125',
          },
        });
        fireEvent.keyDown(cepInput, {
          key: 'Enter',
          code: 'Enter',
          keyCode: 13,
          charCode: 13,
        });
      });
    });
  });

  test('Shipping input ENTER', async () => {
    const { getByTestId } = render(<ShippingContainer />);

    const cepInput = getByTestId('input-component-1');
    await waitFor(() => {
      act(() => {
        fireEvent.keyDown(cepInput, {
          key: 'Enter',
          code: 'Enter',
          keyCode: 13,
          charCode: 13,
        });
      });
    });
  });

  test('TotalsText input ESCAPE', async () => {
    const { getByTestId } = render(<ShippingContainer />);

    const cepInput = getByTestId('input-component-1');
    await waitFor(() => {
      act(() => {
        fireEvent.keyDown(cepInput, {
          key: 'Escape',
          code: 'Escape',
          keyCode: 27,
          charCode: 27,
        });
      });
    });
  });
});
