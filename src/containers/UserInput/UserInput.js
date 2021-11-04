import React, { useContext } from 'react';
import useInputForm from '../../hooks/useInputForm';
import classes from './UserInput.module.css';
import { QuoteContext } from '../../contexts/QuoteContext';

const { inputContainer, inputContainerButtons } = classes;

const UserInput = (props) => {

    const { register, onSubmit, reset } = useInputForm();

    const { setQuote } = useContext(QuoteContext);

    const clearReactHookForm = (e) => {
        e.preventDefault();
        reset({
            Message: ""
        }, {
            keepIsSubmitted: false,
            keepIsValid: false,
            keepSubmitCount: false,
        });
        setQuote('');
    }

    return (
        <>
            <form className={inputContainer} onSubmit={onSubmit}>
                <label>Type your message</label>
                <textarea
                    type="text"
                    size="150"
                    defaultValue='Master Obiwan has lost a planet.'
                    {...register("Message")}
                />
                <section className={inputContainerButtons}>
                    <button
                        type="submit"
                    >
                        Translate
                    </button>
                    <button onClick={clearReactHookForm}>Clear</button>
                </section>
            </form>
        </>
    );
};

export default UserInput;