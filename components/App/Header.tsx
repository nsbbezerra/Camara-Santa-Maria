import { FC } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Button,
  IconButton,
  Flex,
  HStack,
  Divider,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import Image from "next/image";

const Header: FC = () => {
  return (
    <>
      <Head>
        <title>Prefeitura Municipal de Santa Maria do Tocantins</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box bg="green.500" h="45px" justify="center" align="center">
        <Container maxW="5xl">
          <Flex justify="space-between" align="center" h="45px">
            <HStack spacing={4}>
              <Button
                variant="link"
                colorScheme="whiteAlpha"
                color="white"
                _hover={{ textDecor: "none" }}
                size="sm"
              >
                HOME
              </Button>

              <Divider orientation="vertical" h="25px" />

              <Button
                variant="link"
                colorScheme="whiteAlpha"
                color="white"
                _hover={{ textDecor: "none" }}
                size="sm"
              >
                WEBMAIL
              </Button>

              <Divider orientation="vertical" h="25px" />

              <Button
                variant="link"
                colorScheme="whiteAlpha"
                color="white"
                _hover={{ textDecor: "none" }}
                size="sm"
              >
                PAINEL DE CONTROLE
              </Button>

              <Divider orientation="vertical" h="25px" />

              <Button
                variant="link"
                colorScheme="whiteAlpha"
                color="white"
                _hover={{ textDecor: "none" }}
                size="sm"
              >
                DIÁRIO OFICIAL
              </Button>
            </HStack>

            <HStack spacing={1}>
              <Text fontWeight="semibold" color="white" mr={3} fontSize="sm">
                SIGA A PREFEITURA
              </Text>

              <IconButton
                aria-label="Whatsapp"
                icon={<AiOutlineWhatsApp />}
                variant="link"
                colorScheme="whiteAlpha"
                color="white"
                fontSize="2xl"
              />
              <IconButton
                aria-label="Instagram"
                icon={<AiOutlineInstagram />}
                variant="link"
                colorScheme="whiteAlpha"
                color="white"
                fontSize="2xl"
              />
              <IconButton
                aria-label="Youtube"
                icon={<AiOutlineYoutube />}
                variant="link"
                colorScheme="whiteAlpha"
                color="white"
                fontSize="2xl"
              />
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW="5xl">
          <Flex h="170px" align="center" justify="space-between">
            <Box h="170px" overflow="hidden">
              <Image
                alt="Prefeitura Municipal de Santa Maria do Tocantins"
                src="/img/logo.jpeg"
                width={215}
                height={170}
                layout="fixed"
                objectFit="cover"
              />
            </Box>

            <HStack spacing={5}>
              <Button
                variant="link"
                colorScheme="blue"
                _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="sm"
              >
                A PREFEITURA
              </Button>
              <Button
                variant="link"
                colorScheme="blue"
                _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="sm"
              >
                SECRETARIAS
              </Button>
              <Button
                variant="link"
                colorScheme="blue"
                _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="sm"
              >
                TRANSPARÊNCIA
              </Button>
              <Button
                variant="link"
                colorScheme="blue"
                _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="sm"
              >
                NOTÍCIAS
              </Button>
              <Button
                variant="link"
                colorScheme="blue"
                _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="sm"
              >
                LICITAÇÕES E EDITAIS
              </Button>
              <Button
                variant="link"
                colorScheme="blue"
                _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="sm"
              >
                AGENDA
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
