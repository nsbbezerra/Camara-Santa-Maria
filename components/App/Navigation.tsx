import { FC } from "react";
import { Grid, Button, Stack, Flex, Icon, Text } from "@chakra-ui/react";
import {
  AiOutlineSearch,
  AiOutlineFile,
  AiOutlineMedicineBox,
  AiOutlineTool,
  AiOutlineCopy,
} from "react-icons/ai";
import { IoWaterOutline } from "react-icons/io5";
import { GiInjustice } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { motion } from "framer-motion";

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
        <Stack spacing={2}>
          <Button
            colorScheme="blue"
            leftIcon={<AiOutlineSearch />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            size="lg"
          >
            Transparência
          </Button>
          <Button
            colorScheme="blue"
            leftIcon={<IoWaterOutline />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            size="lg"
          >
            Saneamento Básico
          </Button>
          <Button
            colorScheme="blue"
            leftIcon={<AiOutlineFile />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            size="lg"
          >
            Nota Eletrônica
          </Button>
          <Button
            colorScheme="blue"
            leftIcon={<AiOutlineMedicineBox />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            size="lg"
          >
            Transparência Covid-19
          </Button>
          <Button
            colorScheme="blue"
            leftIcon={<AiOutlineSearch />}
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(1)" }}
            size="lg"
          >
            Transparência 2014 a 2020
          </Button>
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
              <Icon as={AiOutlineFile} fontSize="3xl" userSelect="none" />
              <Text
                mt={2}
                fontSize={["md", "sm", "md", "md", "md"]}
                textAlign="center"
                userSelect="none"
              >
                Decretos
              </Text>
            </Flex>
          </motion.div>

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
                Leis Municipais
              </Text>
            </Flex>
          </motion.div>

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
              <Icon as={AiOutlineFile} fontSize="3xl" userSelect="none" />
              <Text
                mt={2}
                fontSize={["md", "sm", "md", "md", "md"]}
                textAlign="center"
                userSelect="none"
              >
                Decretos
              </Text>
            </Flex>
          </motion.div>

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
                Leis Municipais
              </Text>
            </Flex>
          </motion.div>

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
              <Icon as={AiOutlineFile} fontSize="3xl" userSelect="none" />
              <Text
                mt={2}
                fontSize={["md", "sm", "md", "md", "md"]}
                textAlign="center"
                userSelect="none"
              >
                Decretos
              </Text>
            </Flex>
          </motion.div>

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
                Leis Municipais
              </Text>
            </Flex>
          </motion.div>

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
        </Grid>
      </Grid>
    </>
  );
};

export default Navigation;
