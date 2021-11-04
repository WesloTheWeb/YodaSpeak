import { useForm } from "react-hook-form";

/**
 * Initialize Input Form
 * @returns 
 */

const useInputForm = () => {

    const { register, handleSubmit, reset } = useForm();

    return {
        register,
        handleSubmit,
        reset,
        onSubmit: handleSubmit()
    }
    
}

export default useInputForm;