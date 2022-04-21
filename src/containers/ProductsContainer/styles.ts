// Libs
import styled from 'styled-components';
// Self
import { 
  breakpoints,
  font, 
  primaryColors, 
  secondaryColors,
  spacings
} from '../../common/styles/theme';

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