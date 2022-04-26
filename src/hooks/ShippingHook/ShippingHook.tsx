// Libs
import { useCallback } from 'react';
import { IParams, IShipping } from '../../common/interfaces/IShipping';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext';
import { api } from '../../services/api';

export const ShippingHook = () => {
  const {
    shopCart,
    shipping,
    setShipping
  } = useShopCartHook()

  const getShippingAmount = useCallback(async (cep: string) => {
    const totals = shopCart.reduce((prev, next): IShipping => { 
      return { 
        productWeight: prev.productWeight += next.productWeight,
        productLength: prev.productLength += next.productLength,
        productHeight: prev.productHeight += next.productHeight,
        productWidth: prev.productWidth += next.productWidth,
        productDiameter: prev.productDiameter += next.productDiameter,
        productDeclaredValue: prev.productDeclaredValue += next.productDeclaredValue
      }
    }, {
      productWeight: 0, 
      productLength: 0,
      productHeight: 0,
      productWidth: 0,
      productDiameter: 0,
      productDeclaredValue: 0
    })

    const params: IParams = {
      'nCdEmpresa': '',
      'sDsSenha': '',
      'nCdServico': '41106',
      'sCepOrigem': '90440011',
      'nCdFormato': '1',
      'sCdMaoPropria': 's',
      'sCepDestino': cep,
      'nVlPeso': totals.productWeight,
      'nVlComprimento': totals.productLength,
      'nVlAltura': totals.productHeight,
      'nVlLargura': totals.productWidth,
      'nVlDiametro': totals.productDiameter,
      'nVlValorDeclarado': totals.productDeclaredValue,
      'sCdAvisoRecebimento': 'n',
    }

    const headers = {"Content-Type": "application/xml; charset=utf-8"}

    try {
      const response = await api.get('/shipping/price', {
        params,
        headers
      });

      const shippingAmount = parseFloat(response.data)

      if(shipping !== shippingAmount){
        setShipping(parseFloat(response.data))
      }
    } catch (err) {
      console.error(err)
    }
  }, [
      shopCart,
      shipping,
      setShipping
    ]);
  
  return {
    getShippingAmount
  }
};