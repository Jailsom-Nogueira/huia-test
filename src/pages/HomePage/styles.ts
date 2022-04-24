// Libs
import styled from 'styled-components';
// Self
import { 
  breakpoints, primaryColors, secondaryColors
} from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 42px 32px;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  background-color: transparent;
  
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
    padding: 20px 26px;
    flex-grow: 1;
    overflow: auto;
    min-height: 2em;
  }
`

export const CartTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${breakpoints.medium}) {
    flex-shrink: 0;
    padding: 24px 16px;
    background-color: ${primaryColors.white};
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 14px;
  }
`

export const Cart = styled.div`
  margin-top: 22px;
  padding: 22px;
  background-color: ${primaryColors.white};
`

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: inherit;

  width: 30vw;
  padding: 22px;
  background-color: ${secondaryColors.grayLight};

  @media (max-width: ${breakpoints.large}) {
    max-width: 40vw;
  }
`