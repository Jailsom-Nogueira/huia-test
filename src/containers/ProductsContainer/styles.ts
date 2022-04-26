// Libs
import styled from 'styled-components';
// Self
import { breakpoints } from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  gap: 10px;

  @media (max-width: ${breakpoints.large}) {
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.medium}) {
    justify-content: center;
  }

  overflow-y: scroll;
  ::-webkit-scrollbar {
    /* Chrome */
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32%;

  @media (max-width: ${breakpoints.large}) {
    width: 45%;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;

