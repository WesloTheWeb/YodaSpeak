import axios from "axios";
// import https from 'https';

const sendTranslation = () => {
  
  const postTranslation = 'https://api.funtranslations.com/translate/yoda.json';

  axios
    .post(postTranslation, { text })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export default sendTranslation;