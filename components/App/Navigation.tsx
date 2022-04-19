import { FC } from "react";
import { Grid, Button, Stack, Flex, Icon, Text } from "@chakra-ui/react";
import {
  AiOutlineSearch,
  AiOutlineMedicineBox,
  AiOutlineTool,
  AiOutlineCopy,
  AiOutlineFall,
  AiOutlineRise,
  AiOutlineFileText,
} from "react-icons/ai";
import { GiInjustice } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { motion } from "framer-motion";
import {
  FaFile,
  FaFileInvoice,
  FaFileSignature,
  FaInfoCircle,
  FaReceipt,
  FaSearch,
} from "react-icons/fa";
import Link from "next/link";

const Navigation: FC = () => {
  return (
    <>
      <Grid
        templateColumns={[
          "1fr",
          "280px 1fr",
          "280px 1fr",
          "280px 1fr",
          "280px 1fr",
        ]}
        gap={4}
      >
        <Stack spacing={4}>
          <Link
            href="https://santamaria.7focus.inf.br/santamaria/portal-transparencia"
            passHref
          >
            <a target="_blank">
              <Button
                colorScheme="blue"
                leftIcon={<AiOutlineSearch />}
                _hover={{ transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="lg"
                isFullWidth
              >
                Transparência
              </Button>
            </a>
          </Link>
          <Link
            href="https://santamaria.7focus.inf.br/santamaria/portal-transparencia/menu-transparencia/receitas-covid19"
            passHref
          >
            <a target="_blank">
              <Button
                colorScheme="blue"
                leftIcon={<AiOutlineMedicineBox />}
                _hover={{ transform: "scale(1.05)" }}
                _active={{ transform: "scale(1)" }}
                size="lg"
                isFullWidth
              >
                Transparência Covid-19
              </Button>
            </a>
          </Link>

          <Button
            colorScheme="blue"
            leftIcon={<AiOutlineTool />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            size="lg"
          >
            Portal de Serviços
          </Button>
        </Stack>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={3}
        >
          <Link
            href={
              "https://santamariadotocantins.megasoftarrecadanet.com.br/home"
            }
            passHref
          >
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Flex
                  bg="green.500"
                  color="white"
                  rounded="md"
                  direction="column"
                  justify="center"
                  align="center"
                  h="102px"
                  cursor="pointer"
                >
                  <Icon
                    as={AiOutlineFileText}
                    fontSize="3xl"
                    userSelect="none"
                  />
                  <Text
                    mt={2}
                    fontSize={["md", "sm", "md", "md", "md"]}
                    textAlign="center"
                    userSelect="none"
                  >
                    Nota Fiscal NFS-e
                  </Text>
                </Flex>
              </motion.div>
            </a>
          </Link>
          <Link href="https://diariosantamariatocantins.com.br/" passHref>
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Flex
                  bg="green.500"
                  color="white"
                  rounded="md"
                  direction="column"
                  justify="center"
                  align="center"
                  h="102px"
                  cursor="pointer"
                >
                  <Icon as={ImNewspaper} fontSize="3xl" userSelect="none" />
                  <Text
                    mt={2}
                    fontSize={["md", "sm", "md", "md", "md"]}
                    textAlign="center"
                    userSelect="none"
                  >
                    Diário Municipal
                  </Text>
                </Flex>
              </motion.div>
            </a>
          </Link>

          <Link href="/decretos" passHref>
            <a>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Flex
                  bg="green.500"
                  color="white"
                  rounded="md"
                  direction="column"
                  justify="center"
                  align="center"
                  h="102px"
                  cursor="pointer"
                >
                  <Icon as={GiInjustice} fontSize="3xl" userSelect="none" />
                  <Text
                    mt={2}
                    fontSize={["md", "sm", "md", "md", "md"]}
                    textAlign="center"
                    userSelect="none"
                  >
                    Leis e Decretos
                  </Text>
                </Flex>
              </motion.div>
            </a>
          </Link>

          <Link href="/portarias" passHref>
            <a>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Flex
                  bg="green.500"
                  color="white"
                  rounded="md"
                  direction="column"
                  justify="center"
                  align="center"
                  h="102px"
                  cursor="pointer"
                >
                  <Icon as={AiOutlineCopy} fontSize="3xl" userSelect="none" />
                  <Text
                    mt={2}
                    fontSize={["md", "sm", "md", "md", "md"]}
                    textAlign="center"
                    userSelect="none"
                  >
                    Portarias
                  </Text>
                </Flex>
              </motion.div>
            </a>
          </Link>

          <Link
            href="https://santamaria.7focus.inf.br/santamaria/portal-transparencia"
            passHref
          >
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Flex
                  bg="green.500"
                  color="white"
                  rounded="md"
                  direction="column"
                  justify="center"
                  align="center"
                  h="102px"
                  cursor="pointer"
                >
                  <Icon as={FaFile} fontSize="3xl" userSelect="none" />
                  <Text
                    mt={2}
                    fontSize={["md", "sm", "md", "md", "md"]}
                    textAlign="center"
                    userSelect="none"
                  >
                    Contra Cheque
                  </Text>
                </Flex>
              </motion.div>
            </a>
          </Link>

          <Link
            href="https://santamaria.7focus.inf.br/santamaria/portal-transparencia/menu-transparencia/contratos"
            passHref
          >
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Flex
                  bg="green.500"
                  color="white"
                  rounded="md"
                  direction="column"
                  justify="center"
                  align="center"
                  h="102px"
                  cursor="pointer"
                >
                  <Icon as={FaFileSignature} fontSize="3xl" userSelect="none" />
                  <Text
                    mt={2}
                    fontSize={["md", "sm", "md", "md", "md"]}
                    textAlign="center"
                    userSelect="none"
                  >
                    Contratos
                  </Text>
                </Flex>
              </motion.div>
            </a>
          </Link>

          <Link
            href="https://santamaria.7focus.inf.br/santamaria/portal-empenhos-covid19"
            passHref
          >
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Flex
                  bg="green.500"
                  color="white"
                  rounded="md"
                  direction="column"
                  justify="center"
                  align="center"
                  h="102px"
                  cursor="pointer"
                >
                  <Icon as={AiOutlineFall} fontSize="3xl" userSelect="none" />
                  <Text
                    mt={2}
                    fontSize={["md", "sm", "md", "md", "md"]}
                    textAlign="center"
                    userSelect="none"
                  >
                    Despesas COVID
                  </Text>
                </Flex>
              </motion.div>
            </a>
          </Link>

          <Link
            href="https://santamaria.7focus.inf.br/santamaria/portal-receitas-covid19"
            passHref
          >
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Flex
                  bg="green.500"
                  color="white"
                  rounded="md"
                  direction="column"
                  justify="center"
                  align="center"
                  h="102px"
                  cursor="pointer"
                >
                  <Icon as={AiOutlineRise} fontSize="3xl" userSelect="none" />
                  <Text
                    mt={2}
                    fontSize={["md", "sm", "md", "md", "md"]}
                    textAlign="center"
                    userSelect="none"
                  >
                    Receitas COVID
                  </Text>
                </Flex>
              </motion.div>
            </a>
          </Link>

          <Link
            href="http://vbmsistemas.com.br/esic-santamaria/index/"
            passHref
          >
            <a target="_blank">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Flex
                  bg="green.500"
                  color="white"
                  rounded="md"
                  direction="column"
                  justify="center"
                  align="center"
                  h="102px"
                  cursor="pointer"
                >
                  <Icon as={FaInfoCircle} fontSize="3xl" userSelect="none" />
                  <Text
                    mt={2}
                    fontSize={["md", "sm", "md", "md", "md"]}
                    textAlign="center"
                    userSelect="none"
                  >
                    e-SIC
                  </Text>
                </Flex>
              </motion.div>
            </a>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Navigation;
