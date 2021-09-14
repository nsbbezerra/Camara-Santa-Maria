import type { NextPage } from "next";
import { Container, Flex, Input, Button, Text } from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import News from "../components/App/News";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Noticias: NextPage = () => {
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
        NOTÍCIAS
      </Flex>

      <Container maxW="6xl" mt={20}>
        <News />

        <Flex align="center" justify="center" mt={10}>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<AiOutlineArrowLeft />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            Anterior
          </Button>
          <Input
            size="sm"
            value={1}
            w="50px"
            rounded="md"
            isReadOnly
            mr={2}
            ml={2}
          />
          <Text fontSize="sm">de</Text>
          <Input
            size="sm"
            value={10}
            w="50px"
            rounded="md"
            isReadOnly
            ml={2}
            mr={2}
          />
          <Button
            size="sm"
            colorScheme="blue"
            rightIcon={<AiOutlineArrowRight />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            Próxima
          </Button>
        </Flex>
      </Container>

      <Footer />
    </>
  );
};

export default Noticias;
