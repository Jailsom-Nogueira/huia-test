// Libs
import styled from 'styled-components';
// Self
import { 
  breakpoints,
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
  min-height: ${spacings.space14};
  border: none;

  font-size: 2vw;
  font-weight: ${font.bold};
  color: ${primaryColors.white};

  background-image: url(${props => props.imageSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: gray;
  
  @media (max-width: ${breakpoints.large}) {
    padding: 0 14%;
    font-size: 3.5vw;
    line-height:  ${font.lineHeight.heading05};
    p{
      text-align: center;
    }
  }
`;