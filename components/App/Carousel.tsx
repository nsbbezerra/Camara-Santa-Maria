import { FC, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Box, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import Link from "next/link";

interface IDimensions {
  width: number;
  height: number;
}

const CarouselApp: FC = () => {
  const [dimensions] = useState<IDimensions | undefined>({
    width: 1080,
    height: 400,
  });
  const [show] = useState<boolean>(true);

  return (
    <>
      {show ? (
        <Carousel
          autoPlay
          showArrows
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          interval={5000}
        >
          <Box>
            <Image
              src="/img/prefeitura.jpg"
              layout="responsive"
              width={dimensions?.width}
              height={dimensions?.height}
              objectFit="cover"
              alt="Prefeitura de Santa Maria"
            />
          </Box>
          <LinkBox>
            <Link
              href="http://vbmsistemas.com.br/esic-santamaria/index/"
              passHref
            >
              <LinkOverlay target="_blank">
                <Image
                  src="/img/esic1080.jpg"
                  layout="responsive"
                  width={dimensions?.width}
                  height={dimensions?.height}
                  objectFit="cover"
                  alt="Prefeitura de Santa Maria"
                />
              </LinkOverlay>
            </Link>
          </LinkBox>
          <LinkBox>
            <Link href="/" passHref>
              <LinkOverlay>
                <Image
                  src="/img/ouvidoria1080.jpg"
                  layout="responsive"
                  width={dimensions?.width}
                  height={dimensions?.height}
                  objectFit="cover"
                  alt="Prefeitura de Santa Maria"
                />
              </LinkOverlay>
            </Link>
          </LinkBox>
          <LinkBox>
            <Link
              href="https://app.powerbi.com/view?r=eyJrIjoiODkzMTY1MmYtNzVkZC00MzJiLTliYWUtNWQ5NTk0OGMxZDU3IiwidCI6IjI0OWJjYjU2LTk2ODEtNDY3ZC04NTNhLTEzNTI4OTNhMzFhOCJ9"
              passHref
            >
              <LinkOverlay target="_blank">
                <Image
                  src="/img/covid1080.jpg"
                  layout="responsive"
                  width={dimensions?.width}
                  height={dimensions?.height}
                  objectFit="cover"
                  alt="Prefeitura de Santa Maria"
                />
              </LinkOverlay>
            </Link>
          </LinkBox>
          <LinkBox>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSekBOeUi8eNLXFfbIL1A35dCJeQ3Ryn8HchCxGWUJ8kCKUXfA/viewform"
              passHref
            >
              <LinkOverlay target="_blank">
                <Image
                  src="/img/consulta1080.jpg"
                  layout="responsive"
                  width={dimensions?.width}
                  height={dimensions?.height}
                  objectFit="cover"
                  alt="Prefeitura de Santa Maria"
                />
              </LinkOverlay>
            </Link>
          </LinkBox>
          <LinkBox>
            <Link
              href="https://santamaria.7focus.inf.br/santamaria/portal-transparencia"
              passHref
            >
              <LinkOverlay target="_blank">
                <Image
                  src="/img/portal1080.jpg"
                  layout="responsive"
                  width={dimensions?.width}
                  height={dimensions?.height}
                  objectFit="cover"
                  alt="Prefeitura de Santa Maria"
                />
              </LinkOverlay>
            </Link>
          </LinkBox>
          <LinkBox>
            <Link href="/" passHref>
              <LinkOverlay>
                <Image
                  src="/img/outubro.png"
                  layout="responsive"
                  width={dimensions?.width}
                  height={dimensions?.height}
                  objectFit="cover"
                  alt="Prefeitura de Santa Maria"
                />
              </LinkOverlay>
            </Link>
          </LinkBox>
        </Carousel>
      ) : (
        <Box>
          <Image
            src="/img/prefeitura.jpg"
            layout="responsive"
            width={dimensions?.width}
            height={dimensions?.height}
            objectFit="cover"
            alt="Prefeitura de Santa Maria"
          />
        </Box>
      )}
    </>
  );
};

export default CarouselApp;
