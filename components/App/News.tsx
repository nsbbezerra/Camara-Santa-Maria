import { FC } from "react";
import {
  Heading,
  Grid,
  Flex,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const News: FC = () => {
  return (
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
            alt="Prefeitura de Santa Maria"
            height={350}
            objectFit="cover"
          />
          <Flex h="230px" align="center">
            <Box p={3}>
              <Link href="/noticia" passHref>
                <LinkOverlay>
                  <Heading fontSize="lg">
                    Portaria n° 224/2021, que dispõe sobre o Feriado Prolongado
                    devido ao Feriado Nacional
                  </Heading>
                  <Text fontSize="md" mt={2}>
                    O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou nesta
                    data a Portaria n° 224/2021, que
                  </Text>

                  <Text fontSize="sm" mt={2} fontWeight="light">
                    09 de Setembro de 2021
                  </Text>
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
            objectFit="cover"
            alt="Prefeitura de Santa Maria"
          />
          <Flex h="230px" align="center">
            <Box p={3}>
              <Link href="/noticia" passHref>
                <LinkOverlay href="/">
                  <Heading fontSize="lg">
                    Portaria n° 224/2021, que dispõe sobre o Feriado Prolongado
                    devido ao Feriado Nacional
                  </Heading>
                  <Text fontSize="md" mt={2}>
                    O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou nesta
                    data a Portaria n° 224/2021, que
                  </Text>

                  <Text fontSize="sm" mt={2} fontWeight="light">
                    09 de Setembro de 2021
                  </Text>
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
            objectFit="cover"
            alt="Prefeitura de Santa Maria"
          />
          <Flex h="230px" align="center">
            <Box p={3}>
              <LinkOverlay href="/">
                <Heading fontSize="lg">
                  Portaria n° 224/2021, que dispõe sobre o Feriado Prolongado
                  devido ao Feriado Nacional
                </Heading>
                <Text fontSize="md" mt={2}>
                  O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou nesta
                  data a Portaria n° 224/2021, que
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
            alt="Prefeitura de Santa Maria"
          />
          <Flex h="230px" align="center">
            <Box p={3}>
              <LinkOverlay href="/">
                <Heading fontSize="lg">
                  Portaria n° 224/2021, que dispõe sobre o Feriado Prolongado
                  devido ao Feriado Nacional
                </Heading>
                <Text fontSize="md" mt={2}>
                  O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou nesta
                  data a Portaria n° 224/2021, que
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
  );
};

export default News;
