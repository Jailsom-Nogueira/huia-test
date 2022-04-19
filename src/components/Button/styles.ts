// Libs
import styled from 'styled-components';
// Self
import { 
  font, 
  primaryColors, 
  secondaryColors 
} from '../../common/styles/theme';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  border: none;

  font-size: ${font.sizes.xxSmall};
  font-weight: ${font.semiBold};
  color: ${primaryColors.white};

  background-color: ${secondaryColors.green};
`;
