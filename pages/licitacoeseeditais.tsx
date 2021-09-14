import { useState } from "react";
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
  Collapse,
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
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import {
  AiTwotoneFolderOpen,
  AiOutlineArrowDown,
  AiOutlineFilePdf,
  AiOutlineDownload,
  AiOutlineSearch,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Licitacoes: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);

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
          <Box p={2} rounded="md" borderWidth="1px">
            <Grid
              templateColumns={[
                "1fr",
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
                fontSize="6xl"
                color="green.500"
                display={["none", "block", "block", "block", "block"]}
              />
              <Flex
                align="center"
                cursor="pointer"
                onClick={() => setOpen(!open)}
              >
                <Box>
                  <Text fontWeight="bold" userSelect="none">
                    EDITAL TOMADA DE PREÇO 02/2021 PROCESSO ADMINISTRATIVO
                    31/2021 - PAVIMENTAÇÃO ASFÁLTICA -CONCLUSÃO DA AV. FRANCISCO
                    DE ASSIS
                  </Text>
                  <Text fontSize="sm" fontStyle="italic" userSelect="none">
                    13 de Setembro de 2021
                  </Text>
                </Box>

                <IconButton
                  icon={<AiOutlineArrowDown />}
                  aria-label="Dropdown"
                  size="lg"
                  colorScheme="blue"
                  variant="ghost"
                  onClick={() => setOpen(!open)}
                />
              </Flex>
            </Grid>
            <Collapse in={open} animateOpacity>
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
                  <Tr>
                    <Td w="5%" textAlign="center">
                      <Icon as={AiOutlineFilePdf} />
                    </Td>
                    <Td>Arquivo.pdf</Td>
                    <Td
                      w={["7%", "15%", "15%", "15%", "15%"]}
                      textAlign="center"
                    >
                      <ButtonGroup
                        size="xs"
                        display={["none", "flex", "flex", "flex", "flex"]}
                      >
                        <Button
                          colorScheme="green"
                          leftIcon={<AiOutlineSearch />}
                        >
                          Visualizar
                        </Button>
                        <Button
                          colorScheme="blue"
                          leftIcon={<AiOutlineDownload />}
                        >
                          Baixar
                        </Button>
                      </ButtonGroup>
                      <ButtonGroup
                        size="xs"
                        display={["flex", "none", "none", "none", "none"]}
                      >
                        <IconButton
                          icon={<AiOutlineSearch />}
                          colorScheme="green"
                          aria-label="Down"
                        />
                        <IconButton
                          icon={<AiOutlineDownload />}
                          colorScheme="blue"
                          aria-label="Down"
                        />
                      </ButtonGroup>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Collapse>
          </Box>
        </Stack>
        <Flex align="center" justify="center" mt={10}>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<AiOutlineArrowLeft />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
          >
            Anterior
          </Button>
          <Input
            size="sm"
            value={1}
            w="50px"
            rounded="md"
            isReadOnly
            mr={2}
            ml={2}
          />
          <Text fontSize="sm">de</Text>
          <Input
            size="sm"
            value={10}
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
