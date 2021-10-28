import { FC } from "react";
import {
  Heading,
  Grid,
  Flex,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  Icon,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsInboxFill } from "react-icons/bs";
import { format } from "date-fns";
import pt_br from "date-fns/locale/pt-BR";
import { config } from "../../configs/config";

interface INews {
  _id: string;
  title: string;
  resume: string;
  author: string;
  date: Date;
  image: string;
  imageCopy: string;
  text: string;
  galery?: IImages[];
  month: string;
  year: number;
  created_at: Date;
  tag?: string;
}

interface IImages {
  image: string;
  _id: string;
}

interface IProps {
  news?: INews[];
}

const News: FC<IProps> = ({ news }) => {
  return (
    <>
      {!news?.length ? (
        <Flex
          justify="center"
          align="center"
          direction="column"
          w="100%"
          mt={5}
        >
          <Icon as={BsInboxFill} color="gray.500" fontSize="4xl" mb={3} />
          <Text color="gray.500">Nenhuma Informação</Text>
        </Flex>
      ) : (
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
          justifyContent="center"
        >
          {news?.map((not) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              key={not._id}
            >
              <LinkBox rounded="md" overflow="hidden" borderWidth="1px">
                <Image
                  src={`${config.default_url}/img/${not.image}`}
                  layout="responsive"
                  width={500}
                  alt="Prefeitura de Santa Maria"
                  height={350}
                  objectFit="cover"
                />
                <Flex align="center">
                  <Box p={3}>
                    {!not.tag ? (
                      ""
                    ) : (
                      <>
                        {!not.tag?.includes(",") ? (
                          <Tag
                            colorScheme="blue"
                            size="sm"
                            d={[
                              "none",
                              "inline-flex",
                              "inline-flex",
                              "inline-flex",
                              "inline-flex",
                            ]}
                          >
                            {not.tag}
                          </Tag>
                        ) : (
                          <Wrap mb={2}>
                            {not.tag?.split(",").map((tag) => (
                              <WrapItem key={tag}>
                                <Tag
                                  colorScheme="blue"
                                  size="sm"
                                  d={[
                                    "none",
                                    "inline-flex",
                                    "inline-flex",
                                    "inline-flex",
                                    "inline-flex",
                                  ]}
                                >
                                  {tag}
                                </Tag>
                              </WrapItem>
                            ))}
                          </Wrap>
                        )}
                      </>
                    )}
                    <Link href={`/noticia/${not._id}`} passHref>
                      <LinkOverlay>
                        <Heading
                          fontSize={["md", "lg", "lg", "lg", "lg"]}
                          noOfLines={4}
                        >
                          {not.title}
                        </Heading>
                        <Text
                          fontSize={["sm", "md", "md", "md", "md"]}
                          mt={2}
                          noOfLines={3}
                        >
                          {not.resume}
                        </Text>

                        <Text
                          fontSize={["xs", "sm", "sm", "sm", "sm"]}
                          mt={2}
                          fontWeight="light"
                          noOfLines={1}
                        >
                          {format(
                            new Date(not.date),
                            "dd 'de' MMMM 'de' yyyy",
                            {
                              locale: pt_br,
                            }
                          )}
                        </Text>
                      </LinkOverlay>
                    </Link>
                  </Box>
                </Flex>
              </LinkBox>
            </motion.div>
          ))}
        </Grid>
      )}
    </>
  );
};

export default News;
