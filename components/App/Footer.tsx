import { FC } from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <>
      <Box bg="green.600" p={10} mt={20}>
        <Container maxW="6xl">
          <Grid
            templateColumns="repeat(auto-fit, minmax(290px, 290px))"
            gap={10}
            justifyContent="center"
          >
            <Box w="260px" h="230px">
              <Image
                src="/img/logo-mono.png"
                layout="responsive"
                width={460}
                height={300}
                objectFit="cover"
              />
            </Box>
            <Box>
              <Stack spacing={5}>
                <Button
                  variant="link"
                  colorScheme="whiteAlpha"
                  color="white"
                  _hover={{ textDecor: "none" }}
                >
                  A PREFEITURA
                </Button>
                <Button
                  variant="link"
                  colorScheme="whiteAlpha"
                  color="white"
                  _hover={{ textDecor: "none" }}
                >
                  SECRETARIAS
                </Button>
                <Button
                  variant="link"
                  colorScheme="whiteAlpha"
                  color="white"
                  _hover={{ textDecor: "none" }}
                >
                  NOTÍCIAS
                </Button>
                <Button
                  variant="link"
                  colorScheme="whiteAlpha"
                  color="white"
                  _hover={{ textDecor: "none" }}
                >
                  LICITAÇÕES E EDITAIS
                </Button>
                <Button
                  variant="link"
                  colorScheme="whiteAlpha"
                  color="white"
                  _hover={{ textDecor: "none" }}
                >
                  AGENDA
                </Button>
              </Stack>
            </Box>

            <Box>
              <Stack spacing={4}>
                <Text color="white">
                  Horário de Funcionamento: das 7h30 às 1130, e das 13h30 às
                  17h30
                </Text>
                <Text color="white">
                  Av. Benedito Botelho, s/n SANTA MARIA DO TOCANTINS - TO,
                  77716-000
                </Text>
                <Text color="white">(63) 9 9290-1172</Text>
                <Text color="white">(63) 3441-1243</Text>
              </Stack>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Flex
        p={5}
        bg="blue.500"
        textAlign="center"
        justify="center"
        align="center"
        color="white"
        fontWeight="semibold"
      >
        Copyright © Prefeitura Municipal de Santa Maria - Todos os direitos
        reservados.
      </Flex>
    </>
  );
};

export default Footer;
