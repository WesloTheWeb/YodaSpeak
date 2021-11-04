import { useForm } from "react-hook-form";
import sendTranslation from "../../utils/sendTranslation";

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
        onSubmit: handleSubmit(sendTranslation)
    }
};

export default useInputForm;