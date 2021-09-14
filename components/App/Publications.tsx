import { FC } from "react";
import { Grid, Button, Flex, Text, Box, ButtonGroup } from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineDownload } from "react-icons/ai";

const Publications: FC = () => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={3}
      mt={3}
    >
      <Box borderWidth="1px" rounded="md" overflow="hidden">
        <Flex h="80px" align="center" justify="center">
          <Text p={2} textAlign="center" fontWeight="semibold">
            Edição nº 27 de 08 de Setembro de 2021
          </Text>
        </Flex>
        <Text textAlign="center" fontWeight="light" fontSize="sm">
          8 de Setembro de 2021
        </Text>
        <ButtonGroup w="100%" spacing={0}>
          <Button
            isFullWidth
            leftIcon={<AiOutlineSearch />}
            rounded="none"
            size="sm"
            colorScheme="green"
            mt={2}
          >
            Visualizar
          </Button>
          <Button
            isFullWidth
            leftIcon={<AiOutlineDownload />}
            rounded="none"
            size="sm"
            colorScheme="blue"
            mt={2}
          >
            Baixar
          </Button>
        </ButtonGroup>
      </Box>
      <Box borderWidth="1px" rounded="md" overflow="hidden">
        <Flex h="80px" align="center" justify="center">
          <Text p={2} textAlign="center" fontWeight="semibold">
            Edição nº 27 de 08 de Setembro de 2021
          </Text>
        </Flex>
        <Text textAlign="center" fontWeight="light" fontSize="sm">
          8 de Setembro de 2021
        </Text>
        <ButtonGroup w="100%" spacing={0}>
          <Button
            isFullWidth
            leftIcon={<AiOutlineSearch />}
            rounded="none"
            size="sm"
            colorScheme="green"
            mt={2}
          >
            Visualizar
          </Button>
          <Button
            isFullWidth
            leftIcon={<AiOutlineDownload />}
            rounded="none"
            size="sm"
            colorScheme="blue"
            mt={2}
          >
            Baixar
          </Button>
        </ButtonGroup>
      </Box>
      <Box borderWidth="1px" rounded="md" overflow="hidden">
        <Flex h="80px" align="center" justify="center">
          <Text p={2} textAlign="center" fontWeight="semibold">
            Edição nº 27 de 08 de Setembro de 2021
          </Text>
        </Flex>
        <Text textAlign="center" fontWeight="light" fontSize="sm">
          8 de Setembro de 2021
        </Text>
        <ButtonGroup w="100%" spacing={0}>
          <Button
            isFullWidth
            leftIcon={<AiOutlineSearch />}
            rounded="none"
            size="sm"
            colorScheme="green"
            mt={2}
          >
            Visualizar
          </Button>
          <Button
            isFullWidth
            leftIcon={<AiOutlineDownload />}
            rounded="none"
            size="sm"
            colorScheme="blue"
            mt={2}
          >
            Baixar
          </Button>
        </ButtonGroup>
      </Box>
      <Box borderWidth="1px" rounded="md" overflow="hidden">
        <Flex h="80px" align="center" justify="center">
          <Text p={2} textAlign="center" fontWeight="semibold">
            Edição nº 27 de 08 de Setembro de 2021
          </Text>
        </Flex>
        <Text textAlign="center" fontWeight="light" fontSize="sm">
          8 de Setembro de 2021
        </Text>
        <ButtonGroup w="100%" spacing={0}>
          <Button
            isFullWidth
            leftIcon={<AiOutlineSearch />}
            rounded="none"
            size="sm"
            colorScheme="green"
            mt={2}
          >
            Visualizar
          </Button>
          <Button
            isFullWidth
            leftIcon={<AiOutlineDownload />}
            rounded="none"
            size="sm"
            colorScheme="blue"
            mt={2}
          >
            Baixar
          </Button>
        </ButtonGroup>
      </Box>
      <Box borderWidth="1px" rounded="md" overflow="hidden">
        <Flex h="80px" align="center" justify="center">
          <Text p={2} textAlign="center" fontWeight="semibold">
            Edição nº 27 de 08 de Setembro de 2021
          </Text>
        </Flex>
        <Text textAlign="center" fontWeight="light" fontSize="sm">
          8 de Setembro de 2021
        </Text>
        <ButtonGroup w="100%" spacing={0}>
          <Button
            isFullWidth
            leftIcon={<AiOutlineSearch />}
            rounded="none"
            size="sm"
            colorScheme="green"
            mt={2}
          >
            Visualizar
          </Button>
          <Button
            isFullWidth
            leftIcon={<AiOutlineDownload />}
            rounded="none"
            size="sm"
            colorScheme="blue"
            mt={2}
          >
            Baixar
          </Button>
        </ButtonGroup>
      </Box>
      <Box borderWidth="1px" rounded="md" overflow="hidden">
        <Flex h="80px" align="center" justify="center">
          <Text p={2} textAlign="center" fontWeight="semibold">
            Edição nº 27 de 08 de Setembro de 2021
          </Text>
        </Flex>
        <Text textAlign="center" fontWeight="light" fontSize="sm">
          8 de Setembro de 2021
        </Text>
        <ButtonGroup w="100%" spacing={0}>
          <Button
            isFullWidth
            leftIcon={<AiOutlineSearch />}
            rounded="none"
            size="sm"
            colorScheme="green"
            mt={2}
          >
            Visualizar
          </Button>
          <Button
            isFullWidth
            leftIcon={<AiOutlineDownload />}
            rounded="none"
            size="sm"
            colorScheme="blue"
            mt={2}
          >
            Baixar
          </Button>
        </ButtonGroup>
      </Box>
    </Grid>
  );
};

export default Publications;
