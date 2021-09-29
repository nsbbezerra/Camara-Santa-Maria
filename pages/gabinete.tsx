import { useState, useEffect } from "react";
import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";
import {
  Container,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Box,
  Heading,
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import Image from "next/image";
import Parse from "html-react-parser";
import { config } from "../configs/config";

interface IDesk {
  _id: string | "";
  name: string | "";
  text: string | "";
  type: string | "";
  thumbnail: string | "";
  created_at: Date;
}

const Gabinete: NextPage<IDesk> = ({
  desks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [desk, setDesk] = useState<IDesk[]>(desks?.desk);
  const [major, setMajor] = useState<IDesk>();
  const [viceMajor, setViceMajor] = useState<IDesk>();

  useEffect(() => {
    const findMajor = desk.find((obj) => obj.type === "major");
    const findViceMajor = desk.find((obj) => obj.type === "vice-major");
    setMajor(findMajor);
    setViceMajor(findViceMajor);
  }, [desk]);

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
        GABINETES
      </Flex>
      <Container maxW="5xl" mt={10}>
        <Tabs variant="solid-rounded">
          <TabList>
            <Tab _focus={{ outline: "none" }}>PREFEITO</Tab>
            <Tab _focus={{ outline: "none" }}>VICE-PREFEITO</Tab>
          </TabList>

          <TabPanels mt={10}>
            <TabPanel p={0}>
              <Grid
                templateColumns={[
                  "1fr",
                  "1fr",
                  "280px 1fr",
                  "280px 1fr",
                  "280px 1fr",
                ]}
                gap={6}
                justifyItems="center"
              >
                <Box rounded="md" overflow="hidden" w="280px" h="280px">
                  <Image
                    src={`${config.default_url}/img/${major?.thumbnail}`}
                    layout="responsive"
                    width={500}
                    height={500}
                    alt="Prefeitura de Santa Maria"
                    objectFit="cover"
                  />
                </Box>
                <Box>
                  <Heading mb={3}>{major?.name}</Heading>
                  <div id="news-container">{Parse(major?.text || "")}</div>
                </Box>
              </Grid>
            </TabPanel>
            <TabPanel p={0}>
              <Grid
                templateColumns={[
                  "1fr",
                  "1fr",
                  "280px 1fr",
                  "280px 1fr",
                  "280px 1fr",
                ]}
                gap={6}
                justifyItems="center"
              >
                <Box rounded="md" overflow="hidden" w="280px" h="280px">
                  <Image
                    src={`${config.default_url}/img/${viceMajor?.thumbnail}`}
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                    alt="Prefeitura de Santa Maria"
                  />
                </Box>
                <Box>
                  <Heading mb={3}>{viceMajor?.name}</Heading>
                  <div id="news-container">{Parse(viceMajor?.text || "")}</div>
                </Box>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </>
  );
};

export default Gabinete;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${config.default_url}/desk`);
  const data: IDesk = await response.json();

  const desks = !data ? null : data;

  return {
    props: {
      desks,
    },
    revalidate: 60,
  };
};
