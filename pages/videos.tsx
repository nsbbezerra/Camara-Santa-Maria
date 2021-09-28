import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import {
  Container,
  Flex,
  Grid,
  AspectRatio,
  useToast,
  Icon,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { BsInboxFill } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface IVideos {
  _id: string;
  video: string;
  created_at: Date;
}

const Videos: NextPage = () => {
  const toast = useToast();
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const { data, error } = useFetch(`/videos/${page}`);
  const [videos, setVideos] = useState<IVideos[]>();

  useEffect(() => {
    if (data) {
      setVideos(data.video);
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
        VÍDEOS
      </Flex>
      <Container mt={20} maxW="6xl">
        {videos?.length === 0 ? (
          <Flex justify="center" align="center" direction="column">
            <Icon as={BsInboxFill} color="gray.500" fontSize="4xl" mb={3} />
            <Text color="gray.500">Nenhuma Informação</Text>
          </Flex>
        ) : (
          <Grid
            templateColumns="repeat(auto-fit, minmax(260px, 260px))"
            gap={6}
            justifyContent="center"
          >
            {videos?.map((vid) => (
              <AspectRatio
                ratio={16 / 9}
                rounded="md"
                overflow="hidden"
                key={vid._id}
              >
                <iframe
                  width="560"
                  height="315"
                  src={vid.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            ))}
          </Grid>
        )}

        {videos?.length !== 0 && (
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
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Videos;
