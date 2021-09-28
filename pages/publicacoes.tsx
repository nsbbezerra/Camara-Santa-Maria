import type { NextPage } from "next";
import {
  Flex,
  Container,
  useToast,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import Publications from "../components/App/Publications";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface IPublications {
  _id: string;
  title: string;
  date: Date;
  file: string;
  created_at: Date;
}

const Publicacoes: NextPage = () => {
  const toast = useToast();
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const { error, data } = useFetch(`/publicationPage/${page}`);
  const [publication, setPublication] = useState<IPublications[]>();

  function handlePagination(num: string) {
    const divisor = parseFloat(num) / 12;
    if (
      divisor > parseInt(divisor.toString()) &&
      divisor < parseInt(divisor.toString()) + 1
    ) {
      setPages(parseInt(divisor.toString()) + 1);
    } else {
      setPages(parseInt(divisor.toString()));
    }
  }

  useEffect(() => {
    if (data) {
      setPublication(data.publication);
      handlePagination(data.count.toString());
    }
  }, [data]);

  if (error) {
    toast({
      title: "Erro",
      description: "Ocorreu um erro ao conectar-se com o servidor",
      status: "error",
      position: "bottom-right",
      duration: 8000,
      isClosable: true,
    });
  }

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
        <Publications publication={publication} />

        <Flex align="center" justify="center" mt={20}>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<AiOutlineArrowLeft />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            isDisabled={page <= page}
            onClick={() => setPage(page - 1)}
          >
            Anterior
          </Button>
          <Input
            size="sm"
            value={page}
            w="50px"
            rounded="md"
            isReadOnly
            mr={2}
            ml={2}
          />
          <Text fontSize="sm">de</Text>
          <Input
            size="sm"
            value={pages}
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
            isDisabled={page >= pages}
            onClick={() => setPage(page + 1)}
          >
            Próxima
          </Button>
        </Flex>
      </Container>

      <Footer />
    </>
  );
};

export default Publicacoes;
