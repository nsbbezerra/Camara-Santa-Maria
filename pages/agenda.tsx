import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import {
  Flex,
  Container,
  Box,
  Grid,
  Icon,
  Text,
  Heading,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import { AiOutlineCalendar } from "react-icons/ai";
import { config } from "../configs/config";
import { BsInboxFill } from "react-icons/bs";
import pt_br from "date-fns/locale/pt-BR";
import { format } from "date-fns";

interface ISchedule {
  _id: string;
  month: string;
  year: number;
  date: Date;
  events: IEvents[];
  created_at: Date;
}

interface IEvents {
  _id: string;
  schedule: string;
  description: string;
  created_at: Date;
}

const Agenda: NextPage<ISchedule> = ({
  schedule,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { colorMode } = useColorMode();

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
          {schedule.length === 0 ? (
            <Flex justify="center" align="center" direction="column">
              <Icon as={BsInboxFill} color="gray.500" fontSize="4xl" mb={3} />
              <Text color="gray.500">Nenhuma Informação</Text>
            </Flex>
          ) : (
            <>
              {schedule?.map((sch: ISchedule) => (
                <Box
                  borderWidth="1px"
                  rounded="md"
                  overflow="hidden"
                  h="min-content"
                  key={sch._id}
                >
                  <Flex justify="center" align="center" bg="blue.500" p={2}>
                    <Icon as={AiOutlineCalendar} fontSize="3xl" color="white" />
                    <Heading fontSize="md" ml={3} color="white">
                      {format(new Date(sch.date), "dd 'de' MMMM 'de' yyyy", {
                        locale: pt_br,
                      })}
                    </Heading>
                  </Flex>
                  <Stack p={2}>
                    {sch.events.map((evt: IEvents) => (
                      <Flex
                        bg={
                          colorMode === "light"
                            ? "blackAlpha.100"
                            : "whiteAlpha.100"
                        }
                        rounded="md"
                        align="center"
                        p={1}
                        key={evt._id}
                      >
                        <Text fontWeight="bold" ml={1}>
                          {evt.schedule}
                        </Text>
                        <Box ml={3}>
                          <Text noOfLines={4} fontSize="sm">
                            {evt.description}
                          </Text>
                        </Box>
                      </Flex>
                    ))}
                  </Stack>
                </Box>
              ))}
            </>
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Agenda;

export const getStaticProps: GetStaticProps = async () => {
  const actDate = new Date();
  const month = actDate.toLocaleString("pt-br", { month: "long" });
  const year = actDate.getFullYear().toString();
  const response = await fetch(
    `${config.default_url}/schedule/${month}/${year}`
  );
  const data: ISchedule = await response.json();

  const schedule = !data ? null : data;

  console.log(schedule);

  return {
    props: {
      schedule,
    },
    revalidate: 60,
  };
};
