import React from 'react';
import classes from './UserInput.module.css';
import { useForm } from "react-hook-form";

const { inputContainer, inputContainerButtons } = classes;

const UserInput = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <>
            <form className={inputContainer}>
                <label>Type your message</label>
                <textarea type="text" size="150" placeholder="I want to speak like you." {...register("title")} />
            </form>
            <section className={inputContainerButtons}>
                <button>Translate</button>
                <button>Clear</button>
            </section>
        </>
    );
};

export default UserInput;