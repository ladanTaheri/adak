import Head from 'next/head';
import Home from '../components/home/Home';

export default function Index() {
  return (
    <div>
      <Head>
        <title>اداک</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
  )
}
