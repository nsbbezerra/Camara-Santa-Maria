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
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(4, 1fr)",
      ]}
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
          <Flex
            h={["200px", "230px", "230px", "230px", "230px"]}
            align="center"
          >
            <Box p={3}>
              <Link href="/noticia" passHref>
                <LinkOverlay>
                  <Heading
                    fontSize={["md", "lg", "lg", "lg", "lg"]}
                    noOfLines={4}
                  >
                    Portaria n° 224/2021, que dispõe sobre o Feriado Prolongado
                    devido ao Feriado Nacional
                  </Heading>
                  <Text
                    fontSize={["sm", "md", "md", "md", "md"]}
                    mt={2}
                    noOfLines={3}
                  >
                    O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou nesta
                    data a Portaria n° 224/2021, que
                  </Text>

                  <Text
                    fontSize={["xs", "sm", "sm", "sm", "sm"]}
                    mt={2}
                    fontWeight="light"
                    noOfLines={1}
                  >
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
            alt="Prefeitura de Santa Maria"
            height={350}
            objectFit="cover"
          />
          <Flex
            h={["200px", "230px", "230px", "230px", "230px"]}
            align="center"
          >
            <Box p={3}>
              <Link href="/noticia" passHref>
                <LinkOverlay>
                  <Heading
                    fontSize={["md", "lg", "lg", "lg", "lg"]}
                    noOfLines={4}
                  >
                    Portaria n° 224/2021, que dispõe sobre o Feriado Prolongado
                    devido ao Feriado Nacional
                  </Heading>
                  <Text
                    fontSize={["sm", "md", "md", "md", "md"]}
                    mt={2}
                    noOfLines={3}
                  >
                    O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou nesta
                    data a Portaria n° 224/2021, que
                  </Text>

                  <Text
                    fontSize={["xs", "sm", "sm", "sm", "sm"]}
                    mt={2}
                    fontWeight="light"
                    noOfLines={1}
                  >
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
            alt="Prefeitura de Santa Maria"
            height={350}
            objectFit="cover"
          />
          <Flex
            h={["200px", "230px", "230px", "230px", "230px"]}
            align="center"
          >
            <Box p={3}>
              <Link href="/noticia" passHref>
                <LinkOverlay>
                  <Heading
                    fontSize={["md", "lg", "lg", "lg", "lg"]}
                    noOfLines={4}
                  >
                    Portaria n° 224/2021, que dispõe sobre o Feriado Prolongado
                    devido ao Feriado Nacional
                  </Heading>
                  <Text
                    fontSize={["sm", "md", "md", "md", "md"]}
                    mt={2}
                    noOfLines={3}
                  >
                    O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou nesta
                    data a Portaria n° 224/2021, que
                  </Text>

                  <Text
                    fontSize={["xs", "sm", "sm", "sm", "sm"]}
                    mt={2}
                    fontWeight="light"
                    noOfLines={1}
                  >
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
            alt="Prefeitura de Santa Maria"
            height={350}
            objectFit="cover"
          />
          <Flex
            h={["200px", "230px", "230px", "230px", "230px"]}
            align="center"
          >
            <Box p={3}>
              <Link href="/noticia" passHref>
                <LinkOverlay>
                  <Heading
                    fontSize={["md", "lg", "lg", "lg", "lg"]}
                    noOfLines={4}
                  >
                    Portaria n° 224/2021, que dispõe sobre o Feriado Prolongado
                    devido ao Feriado Nacional
                  </Heading>
                  <Text
                    fontSize={["sm", "md", "md", "md", "md"]}
                    mt={2}
                    noOfLines={3}
                  >
                    O Prefeito de Pedro Afonso, Joaquim Pinheiro, publicou nesta
                    data a Portaria n° 224/2021, que
                  </Text>

                  <Text
                    fontSize={["xs", "sm", "sm", "sm", "sm"]}
                    mt={2}
                    fontWeight="light"
                    noOfLines={1}
                  >
                    09 de Setembro de 2021
                  </Text>
                </LinkOverlay>
              </Link>
            </Box>
          </Flex>
        </LinkBox>
      </motion.div>
    </Grid>
  );
};

export default News;
