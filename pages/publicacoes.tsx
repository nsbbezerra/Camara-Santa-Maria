import type { NextPage } from "next";
import { Box, Flex, Container } from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import Publications from "../components/App/Publications";

const Publicacoes: NextPage = () => {
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
        PUBLICAÇÕES
      </Flex>

      <Container maxW="4xl" mt={20}>
        <Publications />
      </Container>

      <Footer />
    </>
  );
};

export default Publicacoes;
