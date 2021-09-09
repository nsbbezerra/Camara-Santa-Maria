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
    height: 350,
  });

  return (
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
          src="https://img.freepik.com/vetores-gratis/ilustracao-de-verao-cidade-rua-cidade_1284-23433.jpg?size=626&ext=jpg&ga=GA1.2.2032489523.1630713600"
          layout="responsive"
          width={dimensions?.width}
          height={dimensions?.height}
          objectFit="cover"
        />
      </Box>

      <Box>
        <Image
          src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
          layout="responsive"
          width={dimensions?.width}
          height={dimensions?.height}
          objectFit="cover"
        />
      </Box>

      <Box>
        <Image
          src="https://img.freepik.com/fotos-gratis/cidade-grande_1127-3102.jpg?size=626&ext=jpg&ga=GA1.2.2140585734.1629504000"
          layout="responsive"
          width={dimensions?.width}
          height={dimensions?.height}
          objectFit="cover"
        />
      </Box>
    </Carousel>
  );
};

export default CarouselApp;
