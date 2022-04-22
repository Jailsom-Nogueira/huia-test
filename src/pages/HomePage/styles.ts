// Libs
import styled from 'styled-components';
// Self
import { 
  breakpoints, primaryColors, secondaryColors
} from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 42px 32px;
`

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  background-color: transparent;

  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`
export const Cart = styled.div`
  background-color: ${primaryColors.white};
  padding: 22px;
`

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: inherit;
  gap: 20px;

  width: 30vw;
  padding: 22px;
  background-color: ${secondaryColors.grayLight};

  @media (max-width: ${breakpoints.large}) {
    max-width: 40vw;
  }

  @media (max-width: ${breakpoints.medium}) {
    display: none;
  }
`