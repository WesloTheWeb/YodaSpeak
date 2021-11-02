import React, { useContext } from 'react';
import classes from './UserInput.module.css';
import { useForm } from "react-hook-form";
import { QuoteContext } from '../../contexts/QuoteContext';

const { inputContainer, inputContainerButtons } = classes;

const UserInput = (props) => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

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

    //TO-DO: Needs to send to API call

    //TO-DO: Make onChange for text area form to the state. To clear, perhaps an object?
    return (
        <>
            <form className={inputContainer} onSubmit={handleSubmit(onSubmit)}>
                <label>Type your message</label>
                <textarea
                    type="text"
                    size="150"
                    defaultValue='Master Obiwan has lost a planet.'
                    {...register("Message")}
                />
                <section className={inputContainerButtons}>
                    <button type="submit"
                    >Translate</button>
                    <button onClick={clearReactHookForm}>Clear</button>
                </section>
            </form>
        </>
    );
};

export default UserInput;