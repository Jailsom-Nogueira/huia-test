// Libs
import styled from 'styled-components';
// Self
import { 
  secondaryColors 
} from '../../common/styles/theme';

export const Container = styled.input`
  padding: 10px 0;

  outline: 0;
  border-width: 0 0 2px;
  border-color: ${secondaryColors.grayLight};
  
  color: ${secondaryColors.gray};

  &:focus {
    border-color: ${secondaryColors.gray};
  };

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(0, 0, 0, 0.4);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(0, 0, 0, 0.4);
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: rgba(0, 0, 0, 0.4);
  }
`;
