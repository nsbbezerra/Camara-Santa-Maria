import type { NextPage, GetStaticProps } from "next";
import Header from "../components/App/Header";
import CarouselApp from "../components/App/Carousel";
import {
  Heading,
  Center,
  Container,
  Grid,
  Button,
  Flex,
  Text,
  Box,
  AspectRatio,
  Icon,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsInboxFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/App/Footer";
import Navigation from "../components/App/Navigation";
import Link from "next/link";
import News from "../components/App/News";
import { config } from "../configs/config";

interface IInformative {
  _id: string;
  image: string;
  created_at: Date;
}

interface INews {
  _id: string;
  title: string;
  resume: string;
  author: string;
  date: Date;
  image: string;
  imageCopy: string;
  text: string;
  galery?: IImages[];
  month: string;
  year: number;
  created_at: Date;
  tag: string;
}

interface IImages {
  image: string;
  _id: string;
}

interface IPublications {
  _id: string;
  title: string;
  date: Date;
  file: string;
  created_at: Date;
}

interface IVideos {
  _id: string;
  video: string;
  created_at: Date;
}

interface IIndex {
  informative?: IInformative[];
  publication?: IPublications[];
  noticia?: INews[];
  video?: IVideos[];
}

const Home: NextPage<IIndex> = ({
  informative,
  publication,
  noticia,
  video,
}) => {
  return (
    <>
      <Header />
      <CarouselApp />

      <Center mt={10} mb={10}>
        <Heading fontSize="2xl">ACESSO À INFORMAÇÃO</Heading>
      </Center>

      <Container maxW="6xl">
        <Navigation />

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={5}
          mt={20}
          bg="blue.500"
          rounded="md"
          pr={10}
          pl={10}
          pt={5}
          pb={5}
          alignItems="center"
        >
          <Flex
            align="center"
            justify={[
              "center",
              "flex-start",
              "flex-start",
              "flex-start",
              "flex-start",
            ]}
          >
            <Image
              src="/img/info.png"
              layout="fixed"
              width={50}
              height={50}
              objectFit="cover"
              alt="Prefeitura de Santa Maria"
            />
            <Box ml={3}>
              <Text fontWeight="bold" color="white">
                Acesso à
              </Text>
              <Text fontWeight="bold" color="white">
                Informação
              </Text>
            </Box>
          </Flex>

          <Link
            href="http://vbmsistemas.com.br/esic-santamaria/index/"
            passHref
          >
            <a target="_blank">
              <Button
                size="lg"
                rounded="full"
                _hover={{ transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                isFullWidth
              >
                Faça aqui seu pedido
              </Button>
            </a>
          </Link>

          <Flex
            justify="flex-end"
            align="center"
            display={["none", "flex", "flex", "flex", "flex"]}
          >
            <Heading color="white" fontSize="5xl">
              SIC
            </Heading>
            <Box ml={3}>
              <Text color="white" fontSize="x-small">
                SERVIÇO DE
              </Text>
              <Text color="white" fontSize="x-small">
                INFORMAÇÃO
              </Text>
              <Text color="white" fontSize="x-small">
                AO CIDADÃO
              </Text>
            </Box>
          </Flex>
        </Grid>

        <Grid
          templateColumns={["1fr", "1fr", "1fr", "280px 1fr", "280px 1fr"]}
          gap={8}
          mt={20}
        >
          <Box>
            <Flex align="center">
              <Box h="20px" w="10px" bg="green.500" />
              <Heading fontSize="xl" ml={2}>
                INFORMATIVOS
              </Heading>
            </Flex>

            <Box
              w={["100%", "100%", "100%", "280px", "280px"]}
              h="280px"
              mt={3}
              overflow="hidden"
              rounded="md"
            >
              {!informative?.length ? (
                <Flex justify="center" align="center" direction="column" mt={5}>
                  <Icon
                    as={BsInboxFill}
                    color="gray.500"
                    fontSize="4xl"
                    mb={3}
                  />
                  <Text color="gray.500">Nenhuma Informação</Text>
                </Flex>
              ) : (
                <Carousel
                  infiniteLoop
                  autoPlay
                  interval={6000}
                  showArrows
                  showIndicators
                  showStatus={false}
                  showThumbs={false}
                >
                  {informative.map((info) => (
                    <Box
                      rounded="md"
                      overflow="hidden"
                      cursor="pointer"
                      w={["100%", "100%", "100%", "300px", "300px"]}
                      h="300px"
                      key={info._id}
                    >
                      <Image
                        src={`${config.default_url}/img/${info.image}`}
                        layout="responsive"
                        width={300}
                        height={300}
                        objectFit="cover"
                        alt="Prefeitura de Santa Maria"
                      />
                    </Box>
                  ))}
                </Carousel>
              )}
            </Box>
          </Box>

          <Box>
            <Flex align="center" mb={3}>
              <Box h="20px" w="10px" bg="green.500" />
              <Heading fontSize="xl" ml={2}>
                ÚLTIMAS NOTÍCIAS
              </Heading>
            </Flex>

            <News news={noticia} />

            <Link href="/noticias" passHref>
              <a>
                <Button
                  rightIcon={<AiOutlinePlus />}
                  colorScheme="blue"
                  variant="link"
                  mt={4}
                  size="lg"
                  _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                  _active={{ transform: "scale(1)" }}
                >
                  Veja Mais Notícias
                </Button>
              </a>
            </Link>
          </Box>
        </Grid>

        <Flex align="center" mt={20} mb={10}>
          <Box h="20px" w="10px" bg="green.500" />
          <Heading fontSize="xl" ml={2}>
            VÍDEOS
          </Heading>
        </Flex>

        <Grid
          templateColumns="repeat(auto-fit, minmax(260px, 260px))"
          gap={6}
          justifyContent="center"
        >
          {video?.length === 0 ? (
            <Flex justify="center" align="center" direction="column">
              <Icon as={BsInboxFill} color="gray.500" fontSize="4xl" mb={3} />
              <Text color="gray.500">Nenhuma Informação</Text>
            </Flex>
          ) : (
            <>
              {video?.map((vid) => (
                <AspectRatio
                  ratio={16 / 9}
                  rounded="md"
                  overflow="hidden"
                  key={vid._id}
                >
                  <iframe
                    width="560"
                    height="315"
                    src={vid.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              ))}
            </>
          )}
        </Grid>

        <Link href="/videos" passHref>
          <a>
            <Button
              rightIcon={<AiOutlinePlus />}
              colorScheme="blue"
              variant="link"
              mt={4}
              size="lg"
              _hover={{ textDecor: "none", transform: "scale(1.05)" }}
              _active={{ transform: "scale(1)" }}
            >
              Veja Mais Vídeos
            </Button>
          </a>
        </Link>

        <Grid
          templateColumns="repeat(auto-fit, minmax(260px, 260px))"
          gap={6}
          justifyContent="center"
          mt={20}
        >
          <Link
            href="http://vbmsistemas.com.br/esic-santamaria/index/"
            passHref
          >
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Box
                  rounded="md"
                  h="180px"
                  cursor="pointer"
                  borderWidth="1px"
                  overflow="hidden"
                >
                  <Image
                    src="/img/esic.jpg"
                    layout="responsive"
                    width={260}
                    height={180}
                    quality={100}
                    alt="Prefeitura de Santa Maria"
                  />
                </Box>
              </motion.div>
            </a>
          </Link>

          <Link
            href="https://app.powerbi.com/view?r=eyJrIjoiODkzMTY1MmYtNzVkZC00MzJiLTliYWUtNWQ5NTk0OGMxZDU3IiwidCI6IjI0OWJjYjU2LTk2ODEtNDY3ZC04NTNhLTEzNTI4OTNhMzFhOCJ9"
            passHref
          >
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Box
                  rounded="md"
                  h="180px"
                  cursor="pointer"
                  borderWidth="1px"
                  overflow="hidden"
                >
                  <Image
                    src="/img/covid.jpg"
                    layout="responsive"
                    width={260}
                    height={180}
                    alt="Prefeitura de Santa Maria"
                    quality={100}
                  />
                </Box>
              </motion.div>
            </a>
          </Link>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Box
              rounded="md"
              h="180px"
              cursor="pointer"
              borderWidth="1px"
              overflow="hidden"
            >
              <Image
                src="/img/ouvidoria.jpg"
                layout="responsive"
                width={260}
                height={180}
                alt="Prefeitura de Santa Maria"
                quality={100}
              />
            </Box>
          </motion.div>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSekBOeUi8eNLXFfbIL1A35dCJeQ3Ryn8HchCxGWUJ8kCKUXfA/viewform"
            passHref
          >
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Box
                  rounded="md"
                  h="180px"
                  cursor="pointer"
                  borderWidth="1px"
                  overflow="hidden"
                >
                  <Image
                    src="/img/cansulta.jpg"
                    layout="responsive"
                    width={260}
                    height={180}
                    alt="Prefeitura de Santa Maria"
                  />
                </Box>
              </motion.div>
            </a>
          </Link>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${config.default_url}/indexSite`);
  const data = await response.json();
  const publication = !data.publication ? null : data.publication;
  const informative = !data.informative ? null : data.informative;
  const noticia = !data.noticia ? null : data.noticia;
  const video = !data.video ? null : data.video;

  return {
    props: {
      publication,
      informative,
      noticia,
      video,
    },
    revalidate: 60,
  };
};
