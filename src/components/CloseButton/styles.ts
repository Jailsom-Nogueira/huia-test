// Libs
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;

  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: 0 0.5px gray;
    transform: translateY(0.5px);
  }
`;
