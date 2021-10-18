import { useState, useEffect } from "react";
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import {
  Flex,
  Container,
  Box,
  Grid,
  Icon,
  Text,
  Heading,
  Stack,
  Radio,
  RadioGroup,
  HStack,
  Divider,
  Button,
  Input,
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import { ImOffice } from "react-icons/im";
import { FaFilePdf } from "react-icons/fa";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineSearch,
} from "react-icons/ai";
import Parse from "html-react-parser";
import { useFetch } from "../hooks/useFetch";
import Link from "next/link";
import { config } from "../configs/config";

interface IOrdinance {
  _id: string;
  title: string;
  description: string;
  secretary_id: string;
  file?: string;
  created_at: Date;
}

interface ISecretary {
  _id: string;
  title: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  schedule: string;
  thumbnail: string;
  created_at: Date;
}

const Ordinances: NextPage = ({
  secretary,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [secretarie_id, setSecretarie_id] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);

  const { data } = useFetch(`/ordinances/${secretarie_id}/${page}`);

  const [ordinances, setOrdinances] = useState<IOrdinance[]>();
  const [secretaries] = useState<ISecretary[]>(secretary);

  useEffect(() => {
    if (secretaries.length !== 0) {
      setSecretarie_id(secretaries[0]._id);
    }
  }, [secretaries]);

  useEffect(() => {
    if (data) {
      setOrdinances(data.ordinance);
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
        PORTARIAS
      </Flex>

      <Container mt={20} maxW="6xl">
        <Grid
          templateColumns={[
            "1fr",
            "280px 1fr",
            "280px 1fr",
            "280px 1fr",
            "280px 1fr",
          ]}
          gap={5}
        >
          <Box rounded="md" borderWidth="1px" overflow="hidden" h="min-content">
            <Flex align="center" bg="blue.500" p={3} color="white">
              <Icon as={ImOffice} mr={3} />
              <Text fontWeight="bold">SECRETARIAS</Text>
            </Flex>

            <RadioGroup
              p={4}
              colorScheme="blue"
              value={secretarie_id}
              onChange={(e) => setSecretarie_id(e)}
            >
              <Stack>
                {secretaries.map((sec) => (
                  <Radio key={sec._id} value={sec._id}>
                    {sec.title}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Box>

          <Box>
            {ordinances?.map((ord) => (
              <Box borderWidth="1px" p={5} rounded="md" key={ord._id}>
                <HStack spacing={10} align="flex-start">
                  <Icon as={FaFilePdf} fontSize="5xl" color="green.500" />
                  <Box w="100%">
                    <Heading fontSize="3xl">{ord.title}</Heading>
                    <div id="news-container">
                      {Parse(ord.description || "")}
                    </div>
                    <Divider mt={5} mb={5} />
                    <Link
                      href={`${config.default_url}/docs/${ord.file}`}
                      passHref
                    >
                      <a target="_blank">
                        <Button
                          leftIcon={<AiOutlineSearch />}
                          colorScheme="blue"
                          onClick={() => {}}
                        >
                          Visualizar
                        </Button>
                      </a>
                    </Link>
                  </Box>
                </HStack>
              </Box>
            ))}

            <Flex align="center" justify="center" mt={10}>
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
          </Box>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Ordinances;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${config.default_url}/secretaries`);
  const data: ISecretary = await response.json();

  const secretary = !data ? null : data;

  return {
    props: {
      secretary,
    },
    revalidate: 60,
  };
};
