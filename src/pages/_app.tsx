import '../styles/styles.scss';

import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/base/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CFP - Financial Service Design</title>
        <meta name="description" content="Maintained by Ackyl and Denny." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
