import type { NextPage } from "next";
import {
  Flex,
  Container,
  Box,
  Select,
  FormControl,
  FormLabel,
  HStack,
  Grid,
  Icon,
  Text,
  Heading,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const Agenda: NextPage = () => {
  const { colorMode } = useColorMode();
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    const actYear = new Date();
    setYear(actYear.getFullYear());
  }, []);

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
        AGENDA
      </Flex>
      <Container maxW="4xl" mt={20}>
        <HStack>
          <FormControl>
            <FormLabel>Selecione o mês:</FormLabel>
            <Select>
              <option value="janeiro">Janeiro</option>
              <option value="fevereiro">Fevereiro</option>
              <option value="março">Março</option>
              <option value="abril">Abril</option>
              <option value="maio">Maio</option>
              <option value="junho">Junho</option>
              <option value="julho">Julho</option>
              <option value="agosto">Agosto</option>
              <option value="setembro">Setembro</option>
              <option value="outubro">Outubro</option>
              <option value="novembro">Novembro</option>
              <option value="dezembro">Dezembro</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Selecione o ano:</FormLabel>
            <Select defaultValue={year}>
              <option value={year - 4}>{year - 4}</option>
              <option value={year - 3}>{year - 3}</option>
              <option value={year - 2}>{year - 2}</option>
              <option value={year - 1}>{year - 1}</option>
              <option value={year}>{year}</option>
              <option value={year + 1}>{year + 1}</option>
            </Select>
          </FormControl>
        </HStack>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={5}
          mt={10}
        >
          <Box borderWidth="1px" rounded="md" overflow="hidden" h="min-content">
            <Flex justify="center" align="center" bg="blue.500" p={2}>
              <Icon as={AiOutlineCalendar} fontSize="3xl" color="white" />
              <Heading fontSize="lg" ml={3} color="white">
                13 de Setembro
              </Heading>
            </Flex>
            <Stack p={2}>
              <Flex
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.100"}
                rounded="md"
                align="center"
                p={1}
              >
                <Text fontWeight="bold" ml={1}>
                  12:00
                </Text>
                <Box ml={3}>
                  <Text noOfLines={4} fontSize="sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>

          <Box borderWidth="1px" rounded="md" overflow="hidden" h="min-content">
            <Flex justify="center" align="center" bg="blue.500" p={2}>
              <Icon as={AiOutlineCalendar} fontSize="3xl" color="white" />
              <Heading fontSize="lg" ml={3} color="white">
                13 de Setembro
              </Heading>
            </Flex>
            <Stack p={2}>
              <Flex
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.100"}
                rounded="md"
                align="center"
                p={1}
              >
                <Text fontWeight="bold" ml={1}>
                  12:00
                </Text>
                <Box ml={3}>
                  <Text noOfLines={4} fontSize="sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </Box>
              </Flex>
              <Flex
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.100"}
                rounded="md"
                align="center"
                p={1}
              >
                <Text fontWeight="bold" ml={1}>
                  12:00
                </Text>
                <Box ml={3}>
                  <Text noOfLines={4} fontSize="sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>

          <Box borderWidth="1px" rounded="md" overflow="hidden" h="min-content">
            <Flex justify="center" align="center" bg="blue.500" p={2}>
              <Icon as={AiOutlineCalendar} fontSize="3xl" color="white" />
              <Heading fontSize="lg" ml={3} color="white">
                13 de Setembro
              </Heading>
            </Flex>
            <Stack p={2}>
              <Flex
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.100"}
                rounded="md"
                align="center"
                p={1}
              >
                <Text fontWeight="bold" ml={1}>
                  12:00
                </Text>
                <Box ml={3}>
                  <Text noOfLines={4} fontSize="sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>

          <Box borderWidth="1px" rounded="md" overflow="hidden" h="min-content">
            <Flex justify="center" align="center" bg="blue.500" p={2}>
              <Icon as={AiOutlineCalendar} fontSize="3xl" color="white" />
              <Heading fontSize="lg" ml={3} color="white">
                13 de Setembro
              </Heading>
            </Flex>
            <Stack p={2}>
              <Flex
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.100"}
                rounded="md"
                align="center"
                p={1}
              >
                <Text fontWeight="bold" ml={1}>
                  12:00
                </Text>
                <Box ml={3}>
                  <Text noOfLines={4} fontSize="sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>

          <Box borderWidth="1px" rounded="md" overflow="hidden" h="min-content">
            <Flex justify="center" align="center" bg="blue.500" p={2}>
              <Icon as={AiOutlineCalendar} fontSize="3xl" color="white" />
              <Heading fontSize="lg" ml={3} color="white">
                13 de Setembro
              </Heading>
            </Flex>
            <Stack p={2}>
              <Flex
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.100"}
                rounded="md"
                align="center"
                p={1}
              >
                <Text fontWeight="bold" ml={1}>
                  12:00
                </Text>
                <Box ml={3}>
                  <Text noOfLines={4} fontSize="sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Agenda;
