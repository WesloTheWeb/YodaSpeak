import axios from "axios";
// import _get from 'lodash/get';

const translationURL = '/api/Translation';

const sendTranslation = async (data) => {
    const res = await axios.post(translationURL, data);
    console.log(data);
    return (res, 'data', {});
};

export default sendTranslation;