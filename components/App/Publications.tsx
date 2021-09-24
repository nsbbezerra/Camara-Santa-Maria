import { FC } from "react";
import {
  Grid,
  Button,
  Flex,
  Text,
  Box,
  ButtonGroup,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineDownload } from "react-icons/ai";
import { BsInboxFill } from "react-icons/bs";
import { format } from "date-fns";
import pt_br from "date-fns/locale/pt-BR";

interface IPublications {
  _id: string;
  title: string;
  date: Date;
  file: string;
  created_at: Date;
}

interface IProps {
  publication?: IPublications[];
}

const Publications: FC<IProps> = ({ publication }) => {
  return (
    <>
      {!publication || publication.length === 0 ? (
        <Flex justify="center" align="center" direction="column">
          <Icon as={BsInboxFill} color="gray.500" fontSize="4xl" mb={3} />
          <Text color="gray.500">Nenhuma Informação</Text>
        </Flex>
      ) : (
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
          {publication.map((pub) => (
            <Box borderWidth="1px" rounded="md" overflow="hidden" key={pub._id}>
              <Flex h="80px" align="center" justify="center">
                <Text p={2} textAlign="center" fontWeight="semibold">
                  {pub.title}
                </Text>
              </Flex>
              <Text textAlign="center" fontWeight="light" fontSize="sm">
                {format(new Date(pub.date), "dd 'de' MMMM 'de' yyyy", {
                  locale: pt_br,
                })}
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
          ))}
        </Grid>
      )}
    </>
  );
};

export default Publications;
