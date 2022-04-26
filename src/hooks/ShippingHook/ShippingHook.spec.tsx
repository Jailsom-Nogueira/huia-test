// Self
import * as ShippingHook from './ShippingHook';
//import { ShippingHook } from '../../hooks/ShippingHook/ShippingHook';
import * as CartHook from '../../hooks/CartHook/CartHook';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext';
// Mocks
import { products } from '../../common/mocks';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// const { fetchUsers } = ShippingHook()
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
    jest.spyOn(CartHook, 'CartHook').mockImplementation(() => ({
      checkout: jest.fn(),
      addProduct: jest.fn(),
      removeProduct: jest.fn(),
    }))
    jest.spyOn(ShippingHook, 'ShippingHook').mockImplementation(() => ({
      getShippingAmount: jest.fn(),
      fetchShipping: jest.fn(),
    }))
  });

  // test('ShippingHook Hook', async () => {
  //   let mock: MockAdapter;

  //   beforeAll(() => {
  //     mock = new MockAdapter(axios);
  //   });
  
  //   afterEach(() => {
  //     mock.reset();
  //   });
    
  //   const params = {
  //     'nCdEmpresa': '',
  //     'sDsSenha': '',
  //     'nCdServico': '41106',
  //     'sCepOrigem': '90440011',
  //     'nCdFormato': '1',
  //     'sCdMaoPropria': 's',
  //     'sCepDestino': '29164125',
  //     'nVlPeso': '10',
  //     'nVlComprimento': '10',
  //     'nVlAltura': '10',
  //     'nVlLargura': '10',
  //     'nVlDiametro': '10',
  //     'nVlValorDeclarado': '10',
  //     'sCdAvisoRecebimento': 'n',
  //   }
  //     const headers = {"Content-Type": "application/xml; charset=utf-8"}

  //     const result = await fetchUsers(params, headers);

  //     // then
  //     expect(axios.get).toHaveBeenCalledWith(`https://huia-test-bff.herokuapp.com/shipping/price`);
  //     expect(result).toEqual('0');
  // });
});
