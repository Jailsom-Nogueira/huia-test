// Libs
import styled from 'styled-components';
// Self
import { 
  breakpoints
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
  width: 75%;
  background-color: transparent;

  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`

export const CartWrapper = styled.div`
  display: flex;
  width: 25%;
  background-color: transparent;
  border: 1px solid gray;
  padding: 22px;

  @media (max-width: ${breakpoints.medium}) {
    display: none;
  }
`