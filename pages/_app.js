import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/kaisei-decol/400.css";
import "@fontsource/kaisei-decol/700.css";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import PageWrapper from "../src/components/Layout/PageWrapper";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  magnolia: "#FEF4FF",
  bleu: "#1D84D7",
  eerieBlack: "#1E2122",
  delftBlue: "#2B357D",
  bleuDeFrance: "#1D84D7",
  mainMenuOption: "#99938F",
  violetBlue: "#3946A7",
  byzantineBlue: "#4957C1",
  lavender: "#E2E6F3",
  vistaBlue: "#8C9CCF",
  powderBlue: "#7E8EC9",
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const breakpoints = {
  base: "0px",
  sm: "360px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  xxl: "1650px",
};

const fonts = {
  heading: `'Kaisei Decol', serif`,
  body: `'Kaisei Decol', serif`,
};

export const theme = extendTheme({ colors, breakpoints, fonts });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
