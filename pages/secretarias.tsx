import type { NextPage } from "next";
import {
  Flex,
  Container,
  Grid,
  Box,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import Image from "next/image";

const Secretarias: NextPage = () => {
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
        SECRETARIAS
      </Flex>

      <Container mt={10} maxW="6xl">
        <Box mb={10} rounded="md" borderWidth="1px" p={5}>
          <Flex
            justify="center"
            align="center"
            textAlign="center"
            bg="green.500"
            color="white"
            p={3}
            fontWeight="bold"
            rounded="md"
          >
            SECRETARIA MUNICIPAL DE PLANEJAMENTO E MODERNIZAÇÃO DE GESTÃO
          </Flex>
          <Grid
            templateColumns={[
              "1fr",
              "280px 1fr",
              "280px 1fr",
              "280px 1fr",
              "280px 1fr",
            ]}
            gap={5}
            mt={5}
            justifyItems="center"
          >
            <Box rounded="md" overflow="hidden" w="280px" h="220px">
              <Image
                src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                layout="responsive"
                width={500}
                height={400}
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
            <Box>
              <Center>
                <Text>DADOS DA SECRETARIA</Text>
              </Center>
              <Heading fontSize="2xl" mt={3}>
                Nome do Secretário
              </Heading>
              <Text mt={3}>
                <strong>ENDEREÇO:</strong> It is a long established fact that a
                reader will be distracted by the
              </Text>
              <Text mt={3}>
                <strong>TELEFONE:</strong> (99) 99999-9999
              </Text>
              <Text mt={3}>
                <strong>EMAIL:</strong> email@email.com
              </Text>
              <Text mt={3}>
                <strong>ATENDIMENTO:</strong> 08:00 às 12:00 (Público) e 14:00
                às 18:00, segunda a sexta-feira.
              </Text>
            </Box>
          </Grid>
        </Box>

        <Box mb={10} rounded="md" borderWidth="1px" p={5}>
          <Flex
            justify="center"
            align="center"
            textAlign="center"
            bg="green.500"
            color="white"
            p={3}
            fontWeight="bold"
            rounded="md"
          >
            SECRETARIA MUNICIPAL DE PLANEJAMENTO E MODERNIZAÇÃO DE GESTÃO
          </Flex>
          <Grid
            templateColumns={[
              "1fr",
              "280px 1fr",
              "280px 1fr",
              "280px 1fr",
              "280px 1fr",
            ]}
            gap={5}
            mt={5}
            justifyItems="center"
          >
            <Box rounded="md" overflow="hidden" w="280px" h="220px">
              <Image
                src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                layout="responsive"
                width={500}
                height={400}
                objectFit="cover"
                alt="Prefeitura de Santa Maria"
              />
            </Box>
            <Box>
              <Center>
                <Text>DADOS DA SECRETARIA</Text>
              </Center>
              <Heading fontSize="2xl" mt={3}>
                Nome do Secretário
              </Heading>
              <Text mt={3}>
                <strong>ENDEREÇO:</strong> It is a long established fact that a
                reader will be distracted by the
              </Text>
              <Text mt={3}>
                <strong>TELEFONE:</strong> (99) 99999-9999
              </Text>
              <Text mt={3}>
                <strong>EMAIL:</strong> email@email.com
              </Text>
              <Text mt={3}>
                <strong>ATENDIMENTO:</strong> 08:00 às 12:00 (Público) e 14:00
                às 18:00, segunda a sexta-feira.
              </Text>
            </Box>
          </Grid>
        </Box>

        <Box mb={10} rounded="md" borderWidth="1px" p={5}>
          <Flex
            justify="center"
            align="center"
            textAlign="center"
            bg="green.500"
            color="white"
            p={3}
            fontWeight="bold"
            rounded="md"
          >
            SECRETARIA MUNICIPAL DE PLANEJAMENTO E MODERNIZAÇÃO DE GESTÃO
          </Flex>
          <Grid
            templateColumns={[
              "1fr",
              "280px 1fr",
              "280px 1fr",
              "280px 1fr",
              "280px 1fr",
            ]}
            gap={5}
            mt={5}
            justifyItems="center"
          >
            <Box rounded="md" overflow="hidden" w="280px" h="220px">
              <Image
                src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                layout="responsive"
                width={500}
                height={400}
                alt="Prefeitura de Santa Maria"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Center>
                <Text>DADOS DA SECRETARIA</Text>
              </Center>
              <Heading fontSize="2xl" mt={3}>
                Nome do Secretário
              </Heading>
              <Text mt={3}>
                <strong>ENDEREÇO:</strong> It is a long established fact that a
                reader will be distracted by the
              </Text>
              <Text mt={3}>
                <strong>TELEFONE:</strong> (99) 99999-9999
              </Text>
              <Text mt={3}>
                <strong>EMAIL:</strong> email@email.com
              </Text>
              <Text mt={3}>
                <strong>ATENDIMENTO:</strong> 08:00 às 12:00 (Público) e 14:00
                às 18:00, segunda a sexta-feira.
              </Text>
            </Box>
          </Grid>
        </Box>

        <Box mb={10} rounded="md" borderWidth="1px" p={5}>
          <Flex
            justify="center"
            align="center"
            textAlign="center"
            bg="green.500"
            color="white"
            p={3}
            fontWeight="bold"
            rounded="md"
          >
            SECRETARIA MUNICIPAL DE PLANEJAMENTO E MODERNIZAÇÃO DE GESTÃO
          </Flex>
          <Grid
            templateColumns={[
              "1fr",
              "280px 1fr",
              "280px 1fr",
              "280px 1fr",
              "280px 1fr",
            ]}
            gap={5}
            mt={5}
            justifyItems="center"
          >
            <Box rounded="md" overflow="hidden" w="280px" h="220px">
              <Image
                src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                layout="responsive"
                width={500}
                height={400}
                alt="Prefeitura de Santa Maria"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Center>
                <Text>DADOS DA SECRETARIA</Text>
              </Center>
              <Heading fontSize="2xl" mt={3}>
                Nome do Secretário
              </Heading>
              <Text mt={3}>
                <strong>ENDEREÇO:</strong> It is a long established fact that a
                reader will be distracted by the
              </Text>
              <Text mt={3}>
                <strong>TELEFONE:</strong> (99) 99999-9999
              </Text>
              <Text mt={3}>
                <strong>EMAIL:</strong> email@email.com
              </Text>
              <Text mt={3}>
                <strong>ATENDIMENTO:</strong> 08:00 às 12:00 (Público) e 14:00
                às 18:00, segunda a sexta-feira.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Secretarias;
