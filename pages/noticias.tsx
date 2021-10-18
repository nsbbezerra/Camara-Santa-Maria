import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Container, Flex, Input, Button, Text } from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import News from "../components/App/News";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useFetch } from "../hooks/useFetch";

interface INews {
  _id: string;
  title: string;
  resume: string;
  author: string;
  date: Date;
  image: string;
  imageCopy: string;
  text: string;
  galery?: IImages[];
  month: string;
  year: number;
  created_at: Date;
  tag: string;
}

interface IImages {
  image: string;
  _id: string;
}

const Noticias: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const { data } = useFetch(`/news/${page}`);

  const [news, setNews] = useState<INews[]>();

  useEffect(() => {
    if (data) {
      setNews(data.noticias);
      handlePagination(data.count);
    }
  }, [data]);

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
        <News news={news} />
        <Flex align="center" justify="center" mt={20}>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<AiOutlineArrowLeft />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            isDisabled={page <= 1}
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

export default Noticias;
