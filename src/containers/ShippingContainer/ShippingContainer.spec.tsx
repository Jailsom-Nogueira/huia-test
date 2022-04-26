// Libs
import { fireEvent, render, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import TestRenderer from 'react-test-renderer';
// Self
import * as ShippingHook from '../../hooks/ShippingHook/ShippingHook';
import { ShippingContainer } from './ShippingContainer';
import * as CartHook from '../../hooks/CartHook/CartHook';
import { 
  useShopCartHook 
} from '../../context/ShopCartContext/ShopCartContext';
// Mocks
import { products } from '../../common/mocks';

const { act } = TestRenderer;
const mockedShopCartContext = useShopCartHook as jest.Mock

jest.mock('../../context/ShopCartContext/ShopCartContext')

describe('TotalsText element', () => {
  beforeEach(() => {
    mockedShopCartContext.mockReturnValue({
      cartModal: true,
      shopCartTotal: 10,
      shopCart: products,
      setShopCart: jest.fn(),
      setShopCartTotal: jest.fn(),
    })
    jest.spyOn(CartHook, 'CartHook').mockImplementation(() => ({
      checkout: jest.fn(),
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
    }))
  })

  test('TotalsText input change', async () => {
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

  test('TotalsText input ENTER', async () => {
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
