import { FC, useState, useEffect } from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  Stack,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Collapse,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineMenu,
} from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiContrast2Fill } from "react-icons/ri";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

const Header: FC = () => {
  const { push } = useRouter();
  const { toggleColorMode, colorMode } = useColorMode();

  const [open, setOpen] = useState<boolean>(false);
  const [collapse, setCollapse] = useState<boolean>(false);
  const [offset, setOffset] = useState<boolean>(false);

  const goTo = (rt: string) => {
    push(rt);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 212) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Prefeitura Municipal de Santa Maria do Tocantins</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Confira as principais informações da Prefeitura Municipal de Santa Maria do Tocantins - TO sobre assuntos relevantes para o cidadão, servidores e empresas."
        />
        <meta
          name="keywords"
          content="prefeitura, santa maria do tocantins, santa maria, gestão, população, prefeito, secretarias"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Prefeitura Municipal de Santa Maria do Tocantins - TO"
        />
        <meta
          property="og:url"
          content="https://santamariadotocantins.to.gov.br/"
        />
        <meta
          property="og:site_name"
          content="Prefeitura Municipal de Santa Maria do Tocantins - TO"
        />
        <meta
          name="og:description"
          content="Confira as principais informações da Prefeitura Municipal de Santa Maria do Tocantins - TO sobre assuntos relevantes para o cidadão, servidores e empresas."
        />
        <meta name="robots" content="index,nofollow" />
        <meta
          property="og:author"
          content="NK Informática de Pedro Afonso - TO, Desenvolvedor Responsável: Natanael Bezerra"
        />
        <meta name="googletboot" content="index,nofollow" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta content="Global" name="distribution" />
      </Head>

      <Box
        h="70px"
        bg={colorMode === "light" ? "white" : "gray.900"}
        position="fixed"
        zIndex={1000}
        w="100%"
        top={0}
        mt={offset === true ? "0px" : "-80px"}
        right={0}
        shadow="lg"
        transition="all .5s"
        borderBottomWidth="2px"
        borderBottomColor="blue.500"
      >
        <Container maxW="6xl">
          <Flex justify="space-between" h="70px" align="center">
            <Box w="80px">
              <Image
                alt="Prefeitura Municipal de Santa Maria do Tocantins"
                src="/img/logo.svg"
                width={215}
                height={138}
                layout="intrinsic"
                objectFit="cover"
              />
            </Box>

            <Box>
              <HStack
                spacing={5}
                display={["flex", "flex", "flex", "none", "none"]}
              >
                <IconButton
                  aria-label="Menu"
                  icon={<AiOutlineMenu />}
                  colorScheme="blue"
                  variant="link"
                  fontSize="4xl"
                  size="lg"
                  onClick={() => setOpen(!open)}
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
                  onClick={() => goTo("/")}
                >
                  INÍCIO
                </Button>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="link"
                    colorScheme="blue"
                    _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                    _active={{ transform: "scale(1)" }}
                    size="sm"
                    rightIcon={<MdKeyboardArrowDown />}
                  >
                    A PREFEITURA
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => goTo("/historia")}>
                      HISTÓRIA
                    </MenuItem>
                    <MenuItem onClick={() => goTo("/gabinete")}>
                      GABINETE
                    </MenuItem>
                    <MenuItem onClick={() => goTo("/secretarias")}>
                      SECRETARIAS
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Link
                  href="https://santamaria.7focus.inf.br/santamaria/portal-transparencia"
                  passHref
                >
                  <a target="_blank">
                    <Button
                      variant="link"
                      colorScheme="blue"
                      _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                      _active={{ transform: "scale(1)" }}
                      size="sm"
                    >
                      TRANSPARÊNCIA
                    </Button>
                  </a>
                </Link>

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
                  onClick={() => goTo("/licitacoeseeditais")}
                >
                  LICITAÇÕES E EDITAIS
                </Button>
                <Button
                  variant="link"
                  colorScheme="blue"
                  _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                  _active={{ transform: "scale(1)" }}
                  size="sm"
                  onClick={() => goTo("/agenda")}
                >
                  AGENDA
                </Button>
              </HStack>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="green.500" h="45px" justify="center" align="center">
        <Container maxW="5xl">
          <Flex
            justify={[
              "center",
              "space-between",
              "space-between",
              "space-between",
              "space-between",
            ]}
            align="center"
            h="45px"
          >
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
                onClick={() => goTo("/")}
              >
                INÍCIO
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

              <Link
                href="http://www.diariosantamariatocantins.com/index.php/diario"
                passHref
              >
                <a target="_blank">
                  <Button
                    variant="link"
                    colorScheme="whiteAlpha"
                    color="white"
                    _hover={{ textDecor: "none" }}
                    size="sm"
                  >
                    DIÁRIO OFICIAL
                  </Button>
                </a>
              </Link>
            </HStack>

            <HStack spacing={1} align="center">
              <Text fontWeight="semibold" color="white" mr={3} fontSize="sm">
                SIGA A PREFEITURA
              </Text>

              <Link
                passHref
                href="https://www.facebook.com/PrefSantaMari?_rdc=1&_rdr"
              >
                <a target="_blank">
                  <IconButton
                    aria-label="Whatsapp"
                    icon={<FaFacebook />}
                    variant="link"
                    colorScheme="whiteAlpha"
                    color="white"
                    mt={1}
                    fontSize="2xl"
                  />
                </a>
              </Link>

              <Link
                href="https://www.instagram.com/prefsantamaria/?hl=pt-br"
                passHref
              >
                <a target="_blank">
                  <IconButton
                    aria-label="Instagram"
                    icon={<AiOutlineInstagram />}
                    variant="link"
                    colorScheme="whiteAlpha"
                    color="white"
                    fontSize="2xl"
                    mt={1}
                  />
                </a>
              </Link>
              <IconButton
                aria-label="Youtube"
                icon={<AiOutlineYoutube />}
                variant="link"
                colorScheme="whiteAlpha"
                color="white"
                fontSize="2xl"
              />
              <Tooltip label="Alterar Tema" hasArrow>
                <IconButton
                  aria-label="Youtube"
                  icon={<RiContrast2Fill />}
                  variant="link"
                  colorScheme="whiteAlpha"
                  color="white"
                  fontSize="2xl"
                  onClick={toggleColorMode}
                />
              </Tooltip>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW="5xl">
          <Flex
            h="170px"
            align="center"
            justify={[
              "center",
              "center",
              "center",
              "space-between",
              "space-between",
            ]}
          >
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
              pos="absolute"
              right={[5, 10, 10, 10, 10]}
              top={"60px"}
            >
              <IconButton
                aria-label="Menu"
                icon={<AiOutlineMenu />}
                colorScheme="blue"
                variant="link"
                fontSize="4xl"
                size="lg"
                onClick={() => setOpen(!open)}
              />
            </HStack>

            <HStack
              spacing={5}
              display={["none", "none", "none", "flex", "flex"]}
            >
              <Menu>
                <MenuButton
                  as={Button}
                  variant="link"
                  colorScheme="blue"
                  _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                  _active={{ transform: "scale(1)" }}
                  size="md"
                  rightIcon={<MdKeyboardArrowDown />}
                >
                  A PREFEITURA
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => goTo("/historia")}>
                    HISTÓRIA
                  </MenuItem>
                  <MenuItem onClick={() => goTo("/gabinete")}>
                    GABINETE
                  </MenuItem>
                  <MenuItem onClick={() => goTo("/secretarias")}>
                    SECRETARIAS
                  </MenuItem>
                </MenuList>
              </Menu>

              <Link
                href="https://santamaria.7focus.inf.br/santamaria/portal-transparencia"
                passHref
              >
                <a target="_blank">
                  <Button
                    variant="link"
                    colorScheme="blue"
                    _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                    _active={{ transform: "scale(1)" }}
                    size="md"
                  >
                    TRANSPARÊNCIA
                  </Button>
                </a>
              </Link>

              <Button
                variant="link"
                colorScheme="blue"
                _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="md"
                onClick={() => goTo("/noticias")}
              >
                NOTÍCIAS
              </Button>

              <Button
                variant="link"
                colorScheme="blue"
                _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="md"
                onClick={() => goTo("/licitacoeseeditais")}
              >
                LICITAÇÕES E EDITAIS
              </Button>
              <Button
                variant="link"
                colorScheme="blue"
                _hover={{ textDecor: "none", transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="md"
                onClick={() => goTo("/agenda")}
              >
                AGENDA
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Drawer isOpen={open} placement="left" onClose={() => setOpen(!open)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody borderRightWidth="3px" borderRightColor="blue.500" p={0}>
            <Flex justify="center" mt={10}>
              <Box w="180px">
                <Image
                  alt="Prefeitura Municipal de Santa Maria do Tocantins"
                  src="/img/logo.svg"
                  width={215}
                  height={138}
                  layout="intrinsic"
                  objectFit="cover"
                />
              </Box>
            </Flex>

            <Stack mt={10} spacing="0px">
              <Button
                rounded="none"
                colorScheme="blue"
                variant="ghost"
                onClick={() => goTo("/")}
              >
                INÍCIO
              </Button>
              <Box w="100%">
                <Button
                  rounded="none"
                  rightIcon={<MdKeyboardArrowDown />}
                  colorScheme="blue"
                  variant="ghost"
                  isFullWidth
                  onClick={() => setCollapse(!collapse)}
                >
                  A PREFEITURA
                </Button>
                <Collapse in={collapse} animateOpacity>
                  <Stack p={3} spacing={2}>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      variant="outline"
                      onClick={() => goTo("/historia")}
                    >
                      HISTÓRIA
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      variant="outline"
                      onClick={() => goTo("/gabinete")}
                    >
                      GABINETE
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="blue"
                      variant="outline"
                      onClick={() => goTo("/secretarias")}
                    >
                      SECRETARIAS
                    </Button>
                  </Stack>
                </Collapse>
              </Box>

              <Link
                href="https://santamaria.7focus.inf.br/santamaria/portal-transparencia"
                passHref
              >
                <a target="_blank">
                  <Button
                    rounded="none"
                    colorScheme="blue"
                    variant="ghost"
                    isFullWidth
                  >
                    TRANSPARÊNCIA
                  </Button>
                </a>
              </Link>
              <Button
                rounded="none"
                colorScheme="blue"
                variant="ghost"
                onClick={() => goTo("/noticias")}
              >
                NOTÍCIAS
              </Button>
              <Button
                rounded="none"
                colorScheme="blue"
                variant="ghost"
                onClick={() => goTo("/licitacoeseeditais")}
              >
                LICITAÇÕES E EDITAIS
              </Button>
              <Button
                rounded="none"
                colorScheme="blue"
                variant="ghost"
                onClick={() => goTo("/agenda")}
              >
                AGENDA
              </Button>
              <Button rounded="none" colorScheme="blue" variant="ghost">
                WEBMAIL
              </Button>
              <Button rounded="none" colorScheme="blue" variant="ghost">
                DIÁRIO OFICIAL
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
