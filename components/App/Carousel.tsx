import { FC, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Box, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import Link from "next/link";
import { api } from "../../configs/axios";
import { config } from "../../configs/config";

interface IDimensions {
  width: number;
  height: number;
}

interface IBanner {
  _id: string;
  banner: string;
  url: string;
  created_at: Date;
}

const CarouselApp: FC = () => {
  const [dimensions] = useState<IDimensions | undefined>({
    width: 1080,
    height: 400,
  });
  const [show] = useState<boolean>(true);
  const [banners, setBanners] = useState<IBanner[]>([]);

  async function findBanners() {
    const response = await api.get("/banner");
    if (response.data) {
      setBanners(response.data);
    }
  }

  useEffect(() => {
    findBanners();
  }, []);

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
          {banners?.map((ban: IBanner) => (
            <LinkBox key={ban._id}>
              <Link href={ban.url === "none" ? "/" : ban.url} passHref>
                <LinkOverlay>
                  <Image
                    src={`${config.default_url}/img/${ban.banner}`}
                    layout="responsive"
                    width={dimensions?.width}
                    height={dimensions?.height}
                    objectFit="cover"
                    alt="Prefeitura de Santa Maria"
                  />
                </LinkOverlay>
              </Link>
            </LinkBox>
          ))}
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
