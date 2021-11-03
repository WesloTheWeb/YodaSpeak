import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Background from '../src/components/Background/Background';
import Footer from '../src/components/Footer/Footer';
import UserInput from '../src/containers/UserInput/UserInput';
import YodaSpeak from '../src/containers/YodaSpeak/YodaSpeak';
import { QuoteContext } from '../src/contexts/QuoteContext';

export default function Home() {

  const [quote, setQuote] = useState(``)

  //TO-DO: Needs to send to API call


 useEffect(() => {

  const postTranslation = async () => {
    const response = await fetch('https://api.funtranslations.com/translate/yoda.json?text=Master%20Obiwan%20has%20lost%20a%20planet');
    const data = await response.json();
    setQuote(data);
  };

  return () => {
    postTranslation();
   }
 }, [])



  return (
    <div>
      <Head>
        <title>Talk like Yoda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <QuoteContext.Provider value={{ quote, setQuote }}>
        <YodaSpeak />
        <UserInput />
      </QuoteContext.Provider>
      <Footer />
    </div>
  );
};