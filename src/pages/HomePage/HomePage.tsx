// Self
import { 
  Modal,
  Banner,
  CartEmpty,
  CartTitle,
  CloseButton
} from '../../components';
import {
  TotalText,
  TotalsContainer,
  ProductsContainer,
  ProdThumbContainer,
  ShippingContainer,
} from '../../containers';
import * as S from './styles';
import { WindowHook } from '../../hooks/WindowHook/WindowHook';
import { useShopCartHook } from '../../context/ShopCartContext/ShopCartContext';
// Assets
import comicsBanner from '../../common/assets/images/full/comics-banner-image.svg';
import xIcon from '../../common/assets/icons/x-icon.svg';


export function HomePage(): JSX.Element {
  const { shopCart, cartModal, setCartModal } = useShopCartHook()
  const { width } = WindowHook()

  const responsiveCart = ( width > 768 ) ?
  (
    <S.CartWrapper>
      <S.CartTitleWrapper>
        <CartTitle/>
      </S.CartTitleWrapper>
      <S.DesktopStyles>
        <S.Cart>
          {shopCart.length ? 
            (
              <>
                <ShippingContainer />
                <ProdThumbContainer />
              </>
            )
             : 
            <CartEmpty />
          }
        </S.Cart>
        <TotalsContainer />
      </S.DesktopStyles>
    </S.CartWrapper>
  ) : 
  (
    <S.CartButtonWrapper 
      onClick={(() => setCartModal(true))}
    >
      <CartTitle />
      <TotalText />
    </S.CartButtonWrapper>
  )

  return (
    <S.Container>
      <S.MainWrapper>
        <Banner 
          imageSrc={comicsBanner}
          bannerText='Huia - Teste Desenvolvimento Front-End'
        />
        <ProductsContainer/>          
      </S.MainWrapper>
      {responsiveCart}

      {cartModal && 
        <Modal>
          <S.CartWrapper>
            <S.CartTitleWrapper>
              <CartTitle/>
              <CloseButton 
                onClick={(() => setCartModal(false))}
                icon={xIcon}
                altText='close-cart-modal-button'
              />
            </S.CartTitleWrapper>

            <S.Cart>
              {shopCart.length ? 
                (
                  <>
                    <ShippingContainer />
                    <ProdThumbContainer />
                  </>
                )
                : 
                <CartEmpty />
              }
            </S.Cart>
            
            <TotalsContainer />
          </S.CartWrapper>
        </Modal>
      }
    </S.Container>
  )
}