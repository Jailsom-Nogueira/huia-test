// Libs
import styled from 'styled-components';
// Self
import { breakpoints } from '../../common/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 32%;
  height: auto;

  @media (max-width: ${breakpoints.large}) {
    max-width: 45%;
  }

  @media (max-width: ${breakpoints.medium}) {
    max-width: 100%;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: ${breakpoints.large}) {
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.medium}) {
    justify-content: center;
  }
`