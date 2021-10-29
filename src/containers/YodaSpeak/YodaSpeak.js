import React, { useContext } from 'react';
import { QuoteContext } from '../../contexts/QuoteContext';
import classes from './YodaSpeak.module.css';

const { yodaContainer, translationBox } = classes;

const YodaSpeak = (props) => {

    const {quote} = useContext(QuoteContext);
    
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