import type { NextPage } from "next";
import Header from "../components/App/Header";
import CarouselApp from "../components/App/Carousel";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CarouselApp />
    </>
  );
};

export default Home;
