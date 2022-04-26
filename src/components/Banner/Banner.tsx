// Self
import { Container } from './styles';

interface BannerProps {
  imageSrc: string;
  bannerText?: string;
}

export function Banner({
  bannerText, 
  imageSrc
}: BannerProps): JSX.Element {
  return (
    <Container imageSrc={imageSrc}>
      <p>{bannerText}</p>
    </Container>
  );
};
