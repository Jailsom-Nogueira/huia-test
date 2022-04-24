// Libs
import styled from 'styled-components';
// Self
import { 
  primaryColors, 
  ZIndex 
} from '../../common/styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;

  background-color: ${primaryColors.white};

  z-index: ${ZIndex.modal};
`;
