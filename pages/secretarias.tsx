import { useEffect, useState } from "react";
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import {
  Flex,
  Container,
  Grid,
  Box,
  Heading,
  Text,
  Center,
  Stack,
  Icon,
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import Image from "next/image";
import { config } from "../configs/config";
import { BsInboxFill } from "react-icons/bs";

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

const Secretarias: NextPage<ISecretary> = ({
  secretaries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [secretarie] = useState<ISecretary[]>(secretaries);

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
        <Stack spacing={5}>
          {secretarie.length === 0 ? (
            <Flex justify="center" align="center" direction="column">
              <Icon as={BsInboxFill} color="gray.500" fontSize="4xl" mb={3} />
              <Text color="gray.500">Nenhuma Informação</Text>
            </Flex>
          ) : (
            <>
              {secretarie.map((sec) => (
                <Box
                  rounded="md"
                  borderWidth="1px"
                  overflow="hidden"
                  key={sec._id}
                >
                  <Flex
                    justify="center"
                    align="center"
                    textAlign="center"
                    bg="gray.500"
                    color="white"
                    p={3}
                    fontWeight="bold"
                  >
                    {sec.title}
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
                    p={5}
                    justifyItems="center"
                    alignItems="center"
                  >
                    <Box rounded="md" overflow="hidden" w="280px" h="280px">
                      <Image
                        src={`${config.default_url}/img/${sec.thumbnail}`}
                        layout="responsive"
                        width={500}
                        height={580}
                        objectFit="cover"
                        alt="Prefeitura de Santa Maria"
                      />
                    </Box>
                    <Box w="100%" pl={10}>
                      <Heading fontSize="2xl" mt={3}>
                        {sec.name}
                      </Heading>
                      <Text mt={3}>
                        <strong>ENDEREÇO:</strong> {sec.address}
                      </Text>
                      <Text mt={3}>
                        <strong>TELEFONE:</strong> {sec.phone}
                      </Text>
                      <Text mt={3}>
                        <strong>EMAIL:</strong> {sec.email}
                      </Text>
                      <Text mt={3}>
                        <strong>ATENDIMENTO:</strong> {sec.schedule}
                      </Text>
                    </Box>
                  </Grid>
                </Box>
              ))}
            </>
          )}
        </Stack>
      </Container>

      <Footer />
    </>
  );
};

export default Secretarias;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${config.default_url}/secretaries`);
  const data: ISecretary = await response.json();

  const secretaries = !data ? null : data;

  return {
    props: {
      secretaries,
    },
    revalidate: 60,
  };
};
