// Libs
import { useState } from 'react';
// Self
import * as S from './styles';
import { Input } from '../../components';
import { useShippingHook } from '../../hooks/ShippingHook/useShippingHook';

export function ShippingContainer(): JSX.Element {
  const { getShippingAmount } = useShippingHook()

  const [ cep, setCep ] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      getShippingAmount(cep)
    }
  }
  
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value
    setCep(input);
  }

  return (
    <S.Container>
      <h3>Calcular Frete:</h3>
      <Input
        id='cep'
        type='text'
        value={cep}
        name='cep'
        placeholder='Digite aqui o CEP de entrega'
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </S.Container>
  )
};
