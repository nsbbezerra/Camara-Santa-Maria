import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import {
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Grid,
  LinkOverlay,
  Tag,
  LinkBox,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Header from "../../components/App/Header";
import Footer from "../../components/App/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaImages } from "react-icons/fa";
import { config } from "../../configs/config";
import { format } from "date-fns";
import pt_br from "date-fns/locale/pt-BR";
import Parse from "html-react-parser";
import { useState } from "react";

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

const Noticia: NextPage = ({
  news,
  others,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [url, setUrl] = useState<string>("");
  const [modalImage, setModalImage] = useState<boolean>(false);

  const handleImage = (path: string) => {
    setUrl(path);
    setModalImage(true);
  };

  return (
    <>
      <Header />
      <Flex
        justify="center"
        align="center"
        h="45px"
        bg="blue.500"
        textAlign="center"
        color="white"
        fontSize="xl"
        fontWeight="bold"
      >
        NOTÍCIA
      </Flex>

      <Container maxW="4xl" mt={10}>
        <Heading fontSize="4xl" textAlign="justify">
          {news.title}
        </Heading>
        <Text mt={3} textAlign="justify">
          {news.resume}
        </Text>
        <Text fontSize="sm" mt={3} fontWeight="bold">
          {news.author}
        </Text>
        <Text fontStyle="italic" fontSize="sm" fontWeight="light">
          {format(new Date(news.date), "dd 'de' MMMM 'de' yyyy", {
            locale: pt_br,
          })}
        </Text>

        <Box rounded="md" overflow="hidden" mt={3}>
          <Image
            src={`${config.default_url}/img/${news.image}`}
            layout="responsive"
            width={500}
            height={280}
            objectFit="cover"
            alt="Prefeitura de Santa Maria"
          />
        </Box>
        <Text fontStyle="italic" fontSize="xs" fontWeight="light">
          {news.imageCopy}
        </Text>
      </Container>

      <Container maxW="4xl" mt={10}>
        <div id="news-container">{Parse(news.text)}</div>

        {news.galery.length !== 0 && (
          <>
            <Flex align="center" mt={10}>
              <Icon as={FaImages} fontSize="xl" />
              <Heading fontSize="lg" ml={2}>
                Galeria de Fotos
              </Heading>
            </Flex>

            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
                "repeat(4, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={5}
              mt={5}
              justifyContent="center"
            >
              {news.galery?.map((gal: IImages) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  key={gal._id}
                  onClick={() => handleImage(gal.image)}
                >
                  <Box rounded="md" overflow="hidden" cursor="pointer">
                    <Image
                      src={`${config.default_url}/img/${gal.image}`}
                      layout="responsive"
                      width={500}
                      height={320}
                      objectFit="cover"
                      alt="Prefeitura de Santa Maria"
                    />
                  </Box>
                </motion.div>
              ))}
            </Grid>
          </>
        )}

        {others.length !== 0 && (
          <Flex align="center" mt={20}>
            <Box h="20px" w="10px" bg="green.500" />
            <Heading fontSize="xl" ml={2}>
              SAIBA MAIS
            </Heading>
          </Flex>
        )}
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={5}
          mt={5}
          justifyContent="center"
        >
          {others?.map((ord: INews) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              key={ord._id}
            >
              <LinkBox rounded="md" overflow="hidden" borderWidth="1px">
                <Image
                  src={`${config.default_url}/img/${ord.image}`}
                  layout="responsive"
                  width={500}
                  height={350}
                  alt="Prefeitura de Santa Maria"
                  objectFit="cover"
                />
                <Tag size="sm" colorScheme="blue" mt={2} ml={2}>
                  {ord.tag}
                </Tag>
                <Flex h="110px" align="center">
                  <Box p={2}>
                    <Link href={`/noticia/${ord._id}`} passHref>
                      <LinkOverlay href="/">
                        <Heading
                          fontSize={["sm", "md", "md", "md", "md"]}
                          fontWeight="medium"
                          noOfLines={5}
                          w="100%"
                        >
                          {ord.title}
                        </Heading>
                      </LinkOverlay>
                    </Link>
                  </Box>
                </Flex>
              </LinkBox>
            </motion.div>
          ))}
        </Grid>
      </Container>

      <Footer />

      <Modal
        isOpen={modalImage}
        onClose={() => setModalImage(false)}
        isCentered
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent bg="transparent" p={0}>
          <ModalCloseButton zIndex={10000} color="white" />
          <ModalBody bg="transparent" p={0}>
            <Box rounded="md" overflow="hidden">
              <Image
                src={`${config.default_url}/img/${url}`}
                layout="responsive"
                width={500}
                height={300}
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Noticia;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${config.default_url}/showNews`);
  const data: INews[] = await response.json();
  const paths = await data.map((news) => {
    return { params: { noticia: news._id } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const noticia = params?.noticia;
  const response = await fetch(`${config.default_url}/newById/${noticia}`);
  const data = await response.json();

  const news: INews = !data.noticia ? null : data.noticia;
  const others: INews[] = !data.others ? null : data.others;

  return {
    props: {
      news,
      others,
    },
    revalidate: 60,
  };
};
