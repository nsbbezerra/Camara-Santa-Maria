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
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineMenu,
} from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";

const Header: FC = () => {
  const { push } = useRouter();

  const goTo = (rt: string) => {
    push(rt);
  };

  return (
    <>
      <Head>
        <title>Prefeitura Municipal de Santa Maria do Tocantins</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box bg="green.500" h="45px" justify="center" align="center">
        <Container maxW="5xl">
          <Flex justify="space-between" align="center" h="45px">
            <HStack
              spacing={4}
              display={["flex", "none", "none", "none", "none"]}
            >
              <IconButton
                aria-label="Menu"
                icon={<AiOutlineMenu />}
                variant="link"
                colorScheme="whiteAlpha"
                color="white"
                fontSize="2xl"
              />
            </HStack>
            <HStack
              spacing={4}
              display={["none", "flex", "flex", "flex", "flex"]}
            >
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
              <Text
                fontWeight="semibold"
                color="white"
                mr={3}
                fontSize="sm"
                display={["none", "none", "block", "block", "block"]}
              >
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
            <LinkBox h="138px" overflow="hidden">
              <LinkOverlay href="/">
                <Image
                  alt="Prefeitura Municipal de Santa Maria do Tocantins"
                  src="/img/logo.svg"
                  width={215}
                  height={138}
                  layout="intrinsic"
                  objectFit="cover"
                />
              </LinkOverlay>
            </LinkBox>

            <HStack
              spacing={5}
              display={["flex", "flex", "flex", "none", "none"]}
            >
              <IconButton
                aria-label="Menu"
                icon={<AiOutlineMenu />}
                colorScheme="blue"
                variant="outline"
                fontSize="2xl"
                size="lg"
              />
            </HStack>

            <HStack
              spacing={5}
              display={["none", "none", "none", "flex", "flex"]}
            >
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
                onClick={() => goTo("/noticias")}
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
