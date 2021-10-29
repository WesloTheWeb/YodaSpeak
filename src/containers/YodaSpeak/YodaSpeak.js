import React, { useState } from 'react';
import classes from './YodaSpeak.module.css';

const { yodaContainer, translationBox } = classes;

const YodaSpeak = (props) => {

    const [quote, setQuote] = useState('Speak like me, you want.')

    return (
        <section className={yodaContainer}>
            <h1>Talk like Yoda</h1>
            <h2>Yoda Translation:</h2>
            <div className={translationBox}>
                {quote}
            </div>
        </section>
    );
};

export default YodaSpeak;