import type { NextPage } from "next";
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
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaImages } from "react-icons/fa";

const Noticia: NextPage = () => {
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

      <Container maxW="5xl" mt={10}>
        <Heading fontSize="4xl" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          mollis orci. Maecenas ut nisi porttitor, ultrices nibh nec, commodo
          justo. Sed luctus arcu ut.
        </Heading>
        <Text mt={3} textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          viverra augue vitae congue tincidunt. Duis sodales sagittis fermentum.
          Cras ullamcorper.
        </Text>
        <Text fontSize="sm" mt={3} fontWeight="bold">
          Autor do Texto
        </Text>
        <Text fontStyle="italic" fontSize="sm" fontWeight="light">
          13 de Setembro de 2021
        </Text>

        <Box rounded="md" overflow="hidden" mt={3}>
          <Image
            src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
            layout="responsive"
            width={500}
            height={280}
            objectFit="cover"
            alt="Prefeitura de Santa Maria"
          />
        </Box>
        <Text fontStyle="italic" fontSize="xs" fontWeight="light">
          Copy Imagem
        </Text>
      </Container>

      <Container maxW="4xl" mt={10}>
        <Text
          style={{ textIndent: "50px" }}
          fontSize="lg"
          mb={3}
          textAlign="justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          ante commodo, hendrerit metus a, laoreet tortor. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Maecenas in dignissim est. Cras at pharetra nunc, id efficitur sem.
          Cras sed pretium mauris, quis porttitor risus. Suspendisse potenti.
          Nullam tellus dolor, malesuada in aliquam ac, ornare vel orci. Nullam
          dictum odio id elementum venenatis. Sed vitae euismod magna. Integer
          lorem quam, vulputate at ante a, facilisis feugiat risus. Mauris
          tincidunt ex ac magna vestibulum, sit amet condimentum erat
          sollicitudin. Vivamus pretium malesuada elit, quis convallis ex
          tincidunt quis. Nunc quis sapien ultrices, mattis diam id, iaculis
          est. Aliquam erat volutpat.
        </Text>
        <Text
          style={{ textIndent: "50px" }}
          fontSize="lg"
          mb={3}
          textAlign="justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tempor massa lacus, ut scelerisque magna pulvinar ut. Nam dapibus
          felis eu varius fermentum. Aliquam quis nibh eu nibh pretium fermentum
          eu vel eros. Praesent ornare mauris est, eget blandit metus sodales
          non. Aliquam ultrices sapien vitae elit hendrerit, id suscipit neque
          fringilla. Donec nunc libero, porttitor ac odio ut, ornare mollis
          justo. Sed scelerisque nulla sed nisi porta cursus. Praesent sodales,
          purus a semper volutpat, diam magna euismod turpis, quis rhoncus orci
          leo at mi. Sed diam arcu, dictum vitae fermentum a, feugiat id dui.
          Mauris varius ex justo, sit amet tristique erat efficitur a. Maecenas
          varius sapien mauris, quis facilisis metus condimentum eget. Donec
          tempor rutrum libero, non elementum erat. Quisque convallis purus
          lacus, sit amet fermentum nisl tempor id. Aenean nec euismod lectus,
          ac sodales risus.
        </Text>
        <Text
          style={{ textIndent: "50px" }}
          fontSize="lg"
          mb={3}
          textAlign="justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          ante commodo, hendrerit metus a, laoreet tortor. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Maecenas in dignissim est. Cras at pharetra nunc, id efficitur sem.
          Cras sed pretium mauris, quis porttitor risus. Suspendisse potenti.
          Nullam tellus dolor, malesuada in aliquam ac, ornare vel orci. Nullam
          dictum odio id elementum venenatis. Sed vitae euismod magna. Integer
          lorem quam, vulputate at ante a, facilisis feugiat risus. Mauris
          tincidunt ex ac magna vestibulum, sit amet condimentum erat
          sollicitudin. Vivamus pretium malesuada elit, quis convallis ex
          tincidunt quis. Nunc quis sapien ultrices, mattis diam id, iaculis
          est. Aliquam erat volutpat.
        </Text>
        <Text
          style={{ textIndent: "50px" }}
          fontSize="lg"
          mb={3}
          textAlign="justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tempor massa lacus, ut scelerisque magna pulvinar ut. Nam dapibus
          felis eu varius fermentum. Aliquam quis nibh eu nibh pretium fermentum
          eu vel eros. Praesent ornare mauris est, eget blandit metus sodales
          non. Aliquam ultrices sapien vitae elit hendrerit, id suscipit neque
          fringilla. Donec nunc libero, porttitor ac odio ut, ornare mollis
          justo. Sed scelerisque nulla sed nisi porta cursus. Praesent sodales,
          purus a semper volutpat, diam magna euismod turpis, quis rhoncus orci
          leo at mi. Sed diam arcu, dictum vitae fermentum a, feugiat id dui.
          Mauris varius ex justo, sit amet tristique erat efficitur a. Maecenas
          varius sapien mauris, quis facilisis metus condimentum eget. Donec
          tempor rutrum libero, non elementum erat. Quisque convallis purus
          lacus, sit amet fermentum nisl tempor id. Aenean nec euismod lectus,
          ac sodales risus.
        </Text>

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
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Box rounded="md" overflow="hidden" cursor="pointer">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={320}
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Box rounded="md" overflow="hidden" cursor="pointer">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={320}
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Box rounded="md" overflow="hidden" cursor="pointer">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={320}
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Box rounded="md" overflow="hidden" cursor="pointer">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={320}
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Box rounded="md" overflow="hidden" cursor="pointer">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={320}
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Box rounded="md" overflow="hidden" cursor="pointer">
              <Image
                src="https://img.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg?size=626&ext=jpg"
                layout="responsive"
                width={500}
                height={320}
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
          </motion.div>
        </Grid>

        <Flex align="center" mt={20}>
          <Box h="20px" w="10px" bg="green.500" />
          <Heading fontSize="xl" ml={2}>
            SAIBA MAIS
          </Heading>
        </Flex>
        <Grid
          templateColumns={"repeat(auto-fit, minmax(200px, 200px))"}
          gap={5}
          mt={5}
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
                alt="Prefeitura de Santa Maria"
                objectFit="cover"
              />
              <Tag size="sm" colorScheme="blue" mt={2} ml={2}>
                Política
              </Tag>
              <Flex h="110px" align="center">
                <Box p={2}>
                  <Link href="/noticia" passHref>
                    <LinkOverlay href="/">
                      <Heading fontSize="md" fontWeight="medium">
                        Portaria n° 224/2021, que dispõe sobre o Feriado
                        Prolongado devido ao Feriado Nacional
                      </Heading>
                    </LinkOverlay>
                  </Link>
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
                alt="Prefeitura de Santa Maria"
                objectFit="cover"
              />
              <Tag size="sm" colorScheme="blue" mt={2} ml={2}>
                Política
              </Tag>
              <Flex h="110px" align="center">
                <Box p={2}>
                  <Link href="/noticia" passHref>
                    <LinkOverlay href="/">
                      <Heading fontSize="md" fontWeight="medium">
                        Portaria n° 224/2021, que dispõe sobre o Feriado
                        Prolongado devido ao Feriado Nacional
                      </Heading>
                    </LinkOverlay>
                  </Link>
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
                alt="Prefeitura de Santa Maria"
                objectFit="cover"
              />
              <Tag size="sm" colorScheme="blue" mt={2} ml={2}>
                Política
              </Tag>
              <Flex h="110px" align="center">
                <Box p={2}>
                  <Link href="/noticia" passHref>
                    <LinkOverlay href="/">
                      <Heading fontSize="md" fontWeight="medium">
                        Portaria n° 224/2021, que dispõe sobre o Feriado
                        Prolongado devido ao Feriado Nacional
                      </Heading>
                    </LinkOverlay>
                  </Link>
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
                alt="Prefeitura de Santa Maria"
                objectFit="cover"
              />
              <Tag size="sm" colorScheme="blue" mt={2} ml={2}>
                Política
              </Tag>
              <Flex h="110px" align="center">
                <Box p={2}>
                  <Link href="/noticia" passHref>
                    <LinkOverlay href="/">
                      <Heading fontSize="md" fontWeight="medium">
                        Portaria n° 224/2021, que dispõe sobre o Feriado
                        Prolongado devido ao Feriado Nacional
                      </Heading>
                    </LinkOverlay>
                  </Link>
                </Box>
              </Flex>
            </LinkBox>
          </motion.div>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Noticia;
