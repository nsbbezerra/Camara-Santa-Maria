import type { NextPage } from "next";
import { Container, Flex, Grid, Box, Text } from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import Image from "next/image";

const Historia: NextPage = () => {
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
        fontSize={["md", "xl", "xl", "xl", "xl"]}
        fontWeight="bold"
      >
        HISTÓRIA DE SANTA MARIA DO TOCANTINS
      </Flex>
      <Container maxW="6xl" mt={10}>
        <Grid
          templateColumns={[
            "1fr",
            "1fr",
            "1fr 280px",
            "1fr 280px",
            "1fr 280px",
          ]}
          gap={6}
        >
          <Box w="100%">
            <Text style={{ textIndent: "50px" }} mb={3} textAlign="justify">
              Cidade de Santa Maria do Tocantins ganha destaque por grande
              número de obras finalizadas no município pelo prefeito Itamar
              Barrachini.
            </Text>
            <Text style={{ textIndent: "50px" }} mb={3} textAlign="justify">
              Fazer projetos, organizar ideias, planejar para, enfim, ver
              realizados os sonhos, os anseios de um povo. Esse é o objetivo de
              toda a equipe que faz parte da atual gestão. O pensamento
              coletivo, o engajamento de cada servidor, funcionário, secretário,
              colaborador, fez com que o município alcançasse um número de
              construções, reformas e ampliações jamais visto na história de
              Santa Maria do Tocantins.
            </Text>
            <Text style={{ textIndent: "50px" }} mb={3} textAlign="justify">
              É tempo de crescer e desenvolver.
            </Text>
          </Box>
          <Box>
            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(4, 1fr)",
                "1fr",
                "1fr",
                "1fr",
              ]}
              gap={5}
            >
              <Box w="100%" rounded="md" overflow="hidden" cursor="pointer">
                <Image
                  src="/img/st01.jpg"
                  layout="responsive"
                  width={300}
                  height={250}
                  alt="Prefeitura de Santa Maria"
                  objectFit="cover"
                />
              </Box>

              <Box w="100%" rounded="md" overflow="hidden" cursor="pointer">
                <Image
                  src="/img/st02.jpg"
                  layout="responsive"
                  width={300}
                  height={250}
                  alt="Prefeitura de Santa Maria"
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Historia;
