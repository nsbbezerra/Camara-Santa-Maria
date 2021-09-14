import type { NextPage } from "next";
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
  Text,
} from "@chakra-ui/react";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";
import Image from "next/image";

const Gabinete: NextPage = () => {
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
                    src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160098.jpg?size=338&ext=jpg"
                    layout="responsive"
                    width={500}
                    height={500}
                    alt="Prefeitura de Santa Maria"
                    objectFit="cover"
                  />
                </Box>
                <Box>
                  <Heading mb={3}>Nome do Prefeito</Heading>
                  <Text
                    style={{ textIndent: "50px" }}
                    textAlign="justify"
                    mb={3}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </Text>
                  <Text
                    style={{ textIndent: "50px" }}
                    textAlign="justify"
                    mb={3}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </Text>
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
                    src="https://img.freepik.com/vetores-gratis/grande-abertura_23-2148160099.jpg?size=338&ext=jpg"
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                    alt="Prefeitura de Santa Maria"
                  />
                </Box>
                <Box>
                  <Heading mb={3}>Nome do Vice-Prefeito</Heading>
                  <Text
                    style={{ textIndent: "50px" }}
                    textAlign="justify"
                    mb={3}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </Text>
                  <Text
                    style={{ textIndent: "50px" }}
                    textAlign="justify"
                    mb={3}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </Text>
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
