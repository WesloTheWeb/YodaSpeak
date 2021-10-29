import Head from 'next/head';
import Background from '../src/components/Background/Background';
import Footer from '../src/components/Footer/Footer';
import UserInput from '../src/containers/UserInput/UserInput';
import YodaSpeak from '../src/containers/YodaSpeak/YodaSpeak';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Talk like Yoda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <YodaSpeak />
      <UserInput />
      <Footer />
    </div>
  )
}
