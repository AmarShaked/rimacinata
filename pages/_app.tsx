import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    config,
    direction: 'rtl',
    fonts: {
      heading: "'Assistant', sans-serif",
      body: "'Assistant', sans-serif",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
