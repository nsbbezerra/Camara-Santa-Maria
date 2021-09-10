import type { NextPage } from "next";
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
  LinkBox,
  LinkOverlay,
  AspectRatio,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/App/Footer";
import Navigation from "../components/App/Navigation";

const Home: NextPage = () => {
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

          <Button
            size="lg"
            rounded="full"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            Faça aqui seu pedido
          </Button>

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
          templateColumns={["1fr", "1fr", "1fr", "300px 1fr", "300px 1fr"]}
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
              w={["100%", "100%", "100%", "300px", "300px"]}
              h="300px"
              mt={3}
              overflow="hidden"
              rounded="md"
            >
              <Carousel
                infiniteLoop
                autoPlay
                interval={6000}
                showArrows
                showIndicators
                showStatus={false}
                showThumbs={false}
              >
                <Box
                  rounded="md"
                  overflow="hidden"
                  cursor="pointer"
                  w={["100%", "100%", "100%", "300px", "300px"]}
                  h="300px"
                >
                  <Image
                    src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                    layout="responsive"
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                </Box>

                <Box
                  rounded="md"
                  overflow="hidden"
                  cursor="pointer"
                  w={["100%", "100%", "100%", "300px", "300px"]}
                  h="300px"
                >
                  <Image
                    src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                    layout="responsive"
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                </Box>

                <Box
                  rounded="md"
                  overflow="hidden"
                  cursor="pointer"
                  w={["100%", "100%", "100%", "300px", "300px"]}
                  h="300px"
                >
                  <Image
                    src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                    layout="responsive"
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                </Box>
              </Carousel>
            </Box>

            <Button
              rightIcon={<AiOutlinePlus />}
              colorScheme="blue"
              variant="link"
              mt={4}
              size="lg"
              _hover={{ textDecor: "none", transform: "scale(1.05)" }}
              _active={{ transform: "scale(1)" }}
            >
              Veja Mais
            </Button>
          </Box>

          <Box>
            <Flex align="center">
              <Box h="20px" w="10px" bg="green.500" />
              <Heading fontSize="xl" ml={2}>
                ÚLTIMAS PUBLICAÇÕES
              </Heading>
            </Flex>

            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={3}
              mt={3}
            >
              <Box borderWidth="1px" rounded="md" overflow="hidden">
                <Flex h="80px" align="center" justify="center">
                  <Text p={2} textAlign="center" fontWeight="semibold">
                    Edição nº 27 de 08 de Setembro de 2021
                  </Text>
                </Flex>
                <Text textAlign="center" fontWeight="light" fontSize="sm">
                  8 de Setembro de 2021
                </Text>
                <Button
                  isFullWidth
                  leftIcon={<AiOutlineSearch />}
                  rounded="none"
                  size="sm"
                  colorScheme="green"
                  mt={2}
                >
                  Consultar
                </Button>
              </Box>
              <Box borderWidth="1px" rounded="md" overflow="hidden">
                <Flex h="80px" align="center" justify="center">
                  <Text p={2} textAlign="center" fontWeight="semibold">
                    Edição nº 27 de 08 de Setembro de 2021
                  </Text>
                </Flex>
                <Text textAlign="center" fontWeight="light" fontSize="sm">
                  8 de Setembro de 2021
                </Text>
                <Button
                  isFullWidth
                  leftIcon={<AiOutlineSearch />}
                  rounded="none"
                  size="sm"
                  colorScheme="green"
                  mt={2}
                >
                  Consultar
                </Button>
              </Box>
              <Box borderWidth="1px" rounded="md" overflow="hidden">
                <Flex h="80px" align="center" justify="center">
                  <Text p={2} textAlign="center" fontWeight="semibold">
                    Edição nº 27 de 08 de Setembro de 2021
                  </Text>
                </Flex>
                <Text textAlign="center" fontWeight="light" fontSize="sm">
                  8 de Setembro de 2021
                </Text>
                <Button
                  isFullWidth
                  leftIcon={<AiOutlineSearch />}
                  rounded="none"
                  size="sm"
                  colorScheme="green"
                  mt={2}
                >
                  Consultar
                </Button>
              </Box>
              <Box borderWidth="1px" rounded="md" overflow="hidden">
                <Flex h="80px" align="center" justify="center">
                  <Text p={2} textAlign="center" fontWeight="semibold">
                    Edição nº 27 de 08 de Setembro de 2021
                  </Text>
                </Flex>
                <Text textAlign="center" fontWeight="light" fontSize="sm">
                  8 de Setembro de 2021
                </Text>
                <Button
                  isFullWidth
                  leftIcon={<AiOutlineSearch />}
                  rounded="none"
                  size="sm"
                  colorScheme="green"
                  mt={2}
                >
                  Consultar
                </Button>
              </Box>
              <Box borderWidth="1px" rounded="md" overflow="hidden">
                <Flex h="80px" align="center" justify="center">
                  <Text p={2} textAlign="center" fontWeight="semibold">
                    Edição nº 27 de 08 de Setembro de 2021
                  </Text>
                </Flex>
                <Text textAlign="center" fontWeight="light" fontSize="sm">
                  8 de Setembro de 2021
                </Text>
                <Button
                  isFullWidth
                  leftIcon={<AiOutlineSearch />}
                  rounded="none"
                  size="sm"
                  colorScheme="green"
                  mt={2}
                >
                  Consultar
                </Button>
              </Box>
              <Box borderWidth="1px" rounded="md" overflow="hidden">
                <Flex h="80px" align="center" justify="center">
                  <Text p={2} textAlign="center" fontWeight="semibold">
                    Edição nº 27 de 08 de Setembro de 2021
                  </Text>
                </Flex>
                <Text textAlign="center" fontWeight="light" fontSize="sm">
                  8 de Setembro de 2021
                </Text>
                <Button
                  isFullWidth
                  leftIcon={<AiOutlineSearch />}
                  rounded="none"
                  size="sm"
                  colorScheme="green"
                  mt={2}
                >
                  Consultar
                </Button>
              </Box>
            </Grid>
            <Button
              rightIcon={<AiOutlinePlus />}
              colorScheme="blue"
              variant="link"
              mt={4}
              size="lg"
              _hover={{ textDecor: "none", transform: "scale(1.05)" }}
              _active={{ transform: "scale(1)" }}
            >
              Veja Mais
            </Button>
          </Box>
        </Grid>

        <Flex align="center" mt={20} mb={10}>
          <Box h="20px" w="10px" bg="green.500" />
          <Heading fontSize="xl" ml={2}>
            ÚLTIMAS NOTÍCIAS
          </Heading>
        </Flex>

        <Grid
          templateColumns="repeat(auto-fit, minmax(260px, 260px))"
          gap={6}
          justifyContent="center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <LinkBox rounded="md" overflow="hidden" borderWidth="1px">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={350}
                objectFit="cover"
              />
              <Flex h="230px" align="center">
                <Box p={3}>
                  <LinkOverlay href="/">
                    <Heading fontSize="lg">
                      Portaria n° 224/2021, que dispõe sobre o Feriado
                      Prolongado devido ao Feriado Nacional
                    </Heading>
                    <Text fontSize="md" mt={2}>
                      O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou
                      nesta data a Portaria n° 224/2021, que
                    </Text>

                    <Text fontSize="sm" mt={2} fontWeight="light">
                      09 de Setembro de 2021
                    </Text>
                  </LinkOverlay>
                </Box>
              </Flex>
            </LinkBox>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <LinkBox rounded="md" overflow="hidden" borderWidth="1px">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={350}
                objectFit="cover"
              />
              <Flex h="230px" align="center">
                <Box p={3}>
                  <LinkOverlay href="/">
                    <Heading fontSize="lg">
                      Portaria n° 224/2021, que dispõe sobre o Feriado
                      Prolongado devido ao Feriado Nacional
                    </Heading>
                    <Text fontSize="md" mt={2}>
                      O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou
                      nesta data a Portaria n° 224/2021, que
                    </Text>

                    <Text fontSize="sm" mt={2} fontWeight="light">
                      09 de Setembro de 2021
                    </Text>
                  </LinkOverlay>
                </Box>
              </Flex>
            </LinkBox>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <LinkBox rounded="md" overflow="hidden" borderWidth="1px">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={350}
                objectFit="cover"
              />
              <Flex h="230px" align="center">
                <Box p={3}>
                  <LinkOverlay href="/">
                    <Heading fontSize="lg">
                      Portaria n° 224/2021, que dispõe sobre o Feriado
                      Prolongado devido ao Feriado Nacional
                    </Heading>
                    <Text fontSize="md" mt={2}>
                      O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou
                      nesta data a Portaria n° 224/2021, que
                    </Text>

                    <Text fontSize="sm" mt={2} fontWeight="light">
                      09 de Setembro de 2021
                    </Text>
                  </LinkOverlay>
                </Box>
              </Flex>
            </LinkBox>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <LinkBox rounded="md" overflow="hidden" borderWidth="1px">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={350}
                objectFit="cover"
              />
              <Flex h="230px" align="center">
                <Box p={3}>
                  <LinkOverlay href="/">
                    <Heading fontSize="lg">
                      Portaria n° 224/2021, que dispõe sobre o Feriado
                      Prolongado devido ao Feriado Nacional
                    </Heading>
                    <Text fontSize="md" mt={2}>
                      O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou
                      nesta data a Portaria n° 224/2021, que
                    </Text>

                    <Text fontSize="sm" mt={2} fontWeight="light">
                      09 de Setembro de 2021
                    </Text>
                  </LinkOverlay>
                </Box>
              </Flex>
            </LinkBox>
          </motion.div>
        </Grid>

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
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <AspectRatio ratio={16 / 9} rounded="md" overflow="hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WMCjvVVy3LI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <AspectRatio ratio={16 / 9} rounded="md" overflow="hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WMCjvVVy3LI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <AspectRatio ratio={16 / 9} rounded="md" overflow="hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WMCjvVVy3LI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <AspectRatio ratio={16 / 9} rounded="md" overflow="hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WMCjvVVy3LI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </motion.div>
        </Grid>

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

        <Grid
          templateColumns="repeat(auto-fit, minmax(260px, 260px))"
          gap={6}
          justifyContent="center"
          mt={20}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Flex
              rounded="md"
              bg="green.500"
              h="130px"
              direction="column"
              justify="center"
              align="center"
              cursor="pointer"
            >
              <Image
                src="/img/info.png"
                layout="fixed"
                width={70}
                height={70}
                objectFit="cover"
              />
              <Heading fontSize="md" color="white" mt={1}>
                E-SIC
              </Heading>
              <Text fontSize="xs" textAlign="center" color="white">
                Serviço Eletrônico de Informação ao Cidadão
              </Text>
            </Flex>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Flex
              rounded="md"
              bg="green.500"
              h="130px"
              direction="column"
              justify="center"
              align="center"
              cursor="pointer"
            >
              <Image
                src="/img/atendimento.png"
                layout="fixed"
                width={70}
                height={70}
                objectFit="cover"
              />
              <Heading fontSize="md" color="white" mt={1}>
                OUVIDORIA MUNICIPAL
              </Heading>
              <Text fontSize="xs" textAlign="center" color="white">
                Serviço Eletrônico de Informação ao Cidadão
              </Text>
            </Flex>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Flex
              rounded="md"
              bg="green.500"
              h="130px"
              direction="column"
              justify="center"
              align="center"
              cursor="pointer"
            >
              <Image
                src="/img/nfe.png"
                layout="fixed"
                width={70}
                height={70}
                objectFit="cover"
              />
              <Heading fontSize="md" color="white" mt={1}>
                NOTA ELETRÔNICA
              </Heading>
            </Flex>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Flex
              rounded="md"
              bg="blue.500"
              h="130px"
              direction="column"
              justify="center"
              align="center"
              cursor="pointer"
            >
              <Image
                src="/img/consulta.png"
                layout="fixed"
                width={70}
                height={70}
                objectFit="cover"
              />
              <Heading fontSize="md" color="white" mt={1}>
                CONSULTA PÚBLICA
              </Heading>
            </Flex>
          </motion.div>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
