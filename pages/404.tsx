import { useEffect } from "react";
import type { NextPage } from "next";
import { Flex, Container, Text, Icon } from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import { FaPagelines } from "react-icons/fa";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Header />

      <Container mt={10} maxW="4xl">
        <Flex justify="center" align="center" direction="column">
          <Icon as={FaPagelines} color="gray.500" fontSize="9xl" mb={3} />
          <Text color="gray.500" fontSize="3xl">
            Página não encontrada!
          </Text>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
