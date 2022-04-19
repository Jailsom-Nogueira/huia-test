// Libs
import styled from 'styled-components';
// Self
import { 
  font, 
  primaryColors,
  spacings
} from '../../common/styles/theme';

interface ImgProps {
  imageSrc: string;
}

export const Container = styled.div<ImgProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${spacings.space14};
  border: none;

  font-size: ${font.sizes.heading05};
  font-weight: ${font.bold};
  color: ${primaryColors.white};

  background-image: url(${props => props.imageSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  background-position: center;
  background-color: gray;
`;