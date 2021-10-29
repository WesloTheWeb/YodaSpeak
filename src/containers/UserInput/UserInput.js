import React, { useContext } from 'react';
import classes from './UserInput.module.css';
import { useForm } from "react-hook-form";
import { QuoteContext } from '../../contexts/QuoteContext';

const { inputContainer, inputContainerButtons } = classes;

const UserInput = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    const { quote, setQuote } = useContext(QuoteContext);

    const clearHandler = () => {
        event.preventDefault();
        setQuote('');
    }

    //TO-DO: Needs to send to API call

    //TO-DO: Make onChange for text area form to the state. To clear, perhaps an object?
    return (
        <>
            <form className={inputContainer} onSubmit={handleSubmit(onSubmit)}>
                <label>Type your message</label>
                <textarea type="text" size="150" placeholder="I want to speak like you." {...register("Message")} />
                <section className={inputContainerButtons}>
                    <button type="submit">Translate</button>
                    <button onClick={clearHandler}>Clear</button>
                </section>
            </form>
        </>
    );
};

export default UserInput;