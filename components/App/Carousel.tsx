import { FC, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Box } from "@chakra-ui/layout";

interface IDimensions {
  width: number;
  height: number;
}

const CarouselApp: FC = () => {
  const [dimensions] = useState<IDimensions | undefined>({
    width: 1080,
    height: 400,
  });
  const [show] = useState<boolean>(false);

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
              src="/img/santa.jpg"
              layout="responsive"
              width={dimensions?.width}
              height={dimensions?.height}
              objectFit="cover"
              alt="Prefeitura de Santa Maria"
            />
          </Box>
          <Box>
            <Image
              src="/img/santa.jpg"
              layout="responsive"
              width={dimensions?.width}
              height={dimensions?.height}
              objectFit="cover"
              alt="Prefeitura de Santa Maria"
            />
          </Box>
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
