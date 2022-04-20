// Libs
import { FC } from 'react';
// Self
import { Container } from './styles';

interface BannerProps {
  imageSrc: string;
  bannerText?: string;
}

export const Banner: FC<BannerProps> = ({
  bannerText, 
  imageSrc
}) => {
  return (
    <Container imageSrc={imageSrc}>
      <p>{bannerText}</p>
    </Container>
  );
};
