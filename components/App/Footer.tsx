import { FC } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Flex,
  LinkBox,
  LinkOverlay,
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
            justifyItems="center"
          >
            <Box w="260px" h="230px">
              <Image
                src="/img/logo-mono.svg"
                layout="responsive"
                width={460}
                height={300}
                objectFit="cover"
                alt="Prefeitura de Santa Maria do Tocantins"
              />
            </Box>
            <Box w="100%">
              <Stack spacing={5}>
                <LinkBox>
                  <LinkOverlay
                    href="/"
                    color="white"
                    fontWeight="semibold"
                    _hover={{ textDecor: "underline" }}
                  >
                    A PREFEITURA
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay
                    href="/secretarias"
                    color="white"
                    fontWeight="semibold"
                    _hover={{ textDecor: "underline" }}
                  >
                    SECRETARIAS
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay
                    href="/noticias"
                    color="white"
                    fontWeight="semibold"
                    _hover={{ textDecor: "underline" }}
                  >
                    NOTÍCIAS
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay
                    href="/licitacoeseeditais"
                    color="white"
                    fontWeight="semibold"
                    _hover={{ textDecor: "underline" }}
                  >
                    LICITAÇÕES E EDITAIS
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay
                    href="/agenda"
                    color="white"
                    fontWeight="semibold"
                    _hover={{ textDecor: "underline" }}
                  >
                    AGENDA
                  </LinkOverlay>
                </LinkBox>
              </Stack>
            </Box>

            <Box>
              <Stack spacing={4}>
                <Text color="white">
                  Horário de Funcionamento: das 7h30 às 11h30 e das 13h30 às
                  17h30
                </Text>
                <Text color="white">
                  Av. Benedito Botelho, s/n SANTA MARIA DO TOCANTINS - TO,
                  77716-000
                </Text>
                <Text color="white">(63) 9 9290-1172</Text>
                <Text color="white">(63) 3441-1243</Text>
                <Text color="white">Responsável Técnico: Leonardo Noleto</Text>
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
