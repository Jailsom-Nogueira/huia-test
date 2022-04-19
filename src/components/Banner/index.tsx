// Libs
import React from 'react';
// Self
import { Container } from './styles';

interface BannerProps {
  imageSrc: string;
  bannerText: string;
}

const Banner: React.FC<BannerProps> = ({
  bannerText, 
  imageSrc
}) => {
  return (
    <Container imageSrc={imageSrc}>
      <p>{bannerText}</p>
    </Container>
  );
};

export default Banner;
