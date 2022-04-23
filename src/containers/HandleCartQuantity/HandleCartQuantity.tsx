// Self
import { IconButton } from '../../components/IconButton/IconButton';
import { ProductProps } from '../../common/interfaces/IProducts';
import { CartHook } from '../../hooks/CartHook/CartHook';
import * as S from './styles';
// Assets
import trashYcon from '../../common/assets/icons/trash-icon.svg'
import minusIcon from '../../common/assets/icons/minus-icon.svg'
import plusIcon from '../../common/assets/icons/plus-icon.svg'

export function HandleCartQuantity({ product }: ProductProps): JSX.Element {
  const { removeProduct, addProduct } = CartHook()

  const iconToShow = product.productQuantity > 1 ?
  <IconButton onClick={() => removeProduct(product)} altText={'Remove one product icon'} icon={minusIcon} /> :
  <IconButton onClick={() => removeProduct(product)} altText={'Remove the product icon'} icon={trashYcon} />

  return (
    <S.Container>
      <S.CartQuantityWrapper>
        {iconToShow}
        <p>
          {(product.productQuantity).toLocaleString('pt-br', {
            minimumIntegerDigits: 2,
          })}
        </p>
        <IconButton onClick={() => addProduct(product)} altText={'Add product icon'} icon={plusIcon} />
      </S.CartQuantityWrapper>
    </S.Container>
  );
};