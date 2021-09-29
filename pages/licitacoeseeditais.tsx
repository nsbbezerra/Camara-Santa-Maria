import { useState, useEffect } from "react";
import type { NextPage } from "next";
import {
  Box,
  Container,
  Flex,
  Stack,
  Icon,
  Grid,
  Text,
  IconButton,
  Table,
  Th,
  Thead,
  Tbody,
  Tr,
  Td,
  Divider,
  ButtonGroup,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import {
  AiTwotoneFolderOpen,
  AiOutlineFilePdf,
  AiOutlineDownload,
  AiOutlineSearch,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useFetch } from "../hooks/useFetch";
import pt_br from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import Link from "next/link";
import { config } from "../configs/config";

interface IBids {
  _id: string;
  title: string;
  date: Date;
  file: IFile[];
  created_at: Date;
}

interface IFile {
  _id: string;
  file: string;
}

const Licitacoes: NextPage = () => {
  const toast = useToast();
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const { data, error } = useFetch(`/bidPag/${page}`);

  const [bids, setBids] = useState<IBids[]>();

  useEffect(() => {
    if (data) {
      setBids(data.bid);
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

  const Download = (url: string, file: string) => {
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(
      new Blob([url], { type: "application/octet-stream" })
    );
    link.download = file;
    link.click();
  };

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
        LICITAÇÕES E EDITAIS
      </Flex>

      <Container maxW="6xl" mt={10}>
        <Stack spacing={5}>
          {bids?.map((bid) => (
            <Box p={2} rounded="md" borderWidth="1px" key={bid._id}>
              <Grid
                templateColumns={[
                  "30px 1fr",
                  "80px 1fr",
                  "80px 1fr",
                  "80px 1fr",
                  "80px 1fr",
                ]}
                gap={5}
                alignItems="center"
              >
                <Icon
                  as={AiTwotoneFolderOpen}
                  fontSize={["4xl", "6xl", "6xl", "6xl", "6xl"]}
                  color="green.500"
                />
                <Flex align="center" cursor="pointer">
                  <Box>
                    <Text fontWeight="bold" userSelect="none">
                      {bid.title}
                    </Text>
                    <Text fontSize="sm" fontStyle="italic" userSelect="none">
                      {format(new Date(bid.date), "dd 'de' MMMM 'de' yyyy", {
                        locale: pt_br,
                      })}
                    </Text>
                  </Box>
                </Flex>
              </Grid>
              <Divider mt={5} />
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th w="5%" textAlign="center"></Th>
                    <Th>ARQUIVO</Th>
                    <Th w="15%" textAlign="center">
                      OPÇÕES
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {bid.file.map((file) => (
                    <Tr key={file._id}>
                      <Td w="5%" textAlign="center">
                        <Icon as={AiOutlineFilePdf} />
                      </Td>
                      <Td>{file.file}</Td>
                      <Td
                        w={["7%", "15%", "15%", "15%", "15%"]}
                        textAlign="center"
                      >
                        <ButtonGroup
                          size="xs"
                          display={["none", "flex", "flex", "flex", "flex"]}
                        >
                          <Link
                            href={`${config.default_url}/docs/${file.file}`}
                            passHref
                          >
                            <a target="_blank">
                              <Button
                                colorScheme="green"
                                leftIcon={<AiOutlineSearch />}
                              >
                                Visualizar
                              </Button>
                            </a>
                          </Link>
                          <Button
                            colorScheme="blue"
                            leftIcon={<AiOutlineDownload />}
                            onClick={() =>
                              Download(
                                `${config.default_url}/docs/${file.file}`,
                                file.file
                              )
                            }
                          >
                            Baixar
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup
                          size="xs"
                          display={["flex", "none", "none", "none", "none"]}
                        >
                          <IconButton
                            icon={<AiOutlineDownload />}
                            colorScheme="blue"
                            aria-label="Down"
                            onClick={() =>
                              Download(
                                `${config.default_url}/docs/${file.file}`,
                                file.file
                              )
                            }
                          />
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          ))}
        </Stack>
        <Flex align="center" justify="center" mt={10}>
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

export default Licitacoes;
