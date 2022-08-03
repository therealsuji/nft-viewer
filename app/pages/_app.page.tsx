import "styles/globals.scss";
import type { AppProps } from "next/app";
import { Wallet } from "providers/Wallet";
import { ChakraProvider, DarkMode, extendTheme } from "@chakra-ui/react";
import { theme } from "theme";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Wallet>{getLayout(<Component {...pageProps} />)}</Wallet>
    </ChakraProvider>
  );
}

export default MyApp;
