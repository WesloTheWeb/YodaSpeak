import React from 'react';
import classes from './YodaSpeak.module.css';

const { yodaContainer, translationBox } = classes;

const YodaSpeak = (props) => {
    return (
        <section className={yodaContainer}>
            <h1>Talk like Yoda</h1>
            <h2>Yoda Translation:</h2>
            <div className={translationBox}>
                I never worked a day in my life.
            </div>
        </section>
    );
};

export default YodaSpeak;