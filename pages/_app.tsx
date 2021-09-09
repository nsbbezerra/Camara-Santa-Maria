import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../styles/theme";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
