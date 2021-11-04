import axios from "axios";
// import https from 'https';

export default async function sendTranslation(req, res) {

  const postTranslation = 'https://api.funtranslations.com/translate/yoda.json';
  const config = {
    params: { text: 'Master Obiwan has lost a planet.' },

  }

  try {
    const response = await axios.post(postTranslation, req.message, config);
    console.log(`Response ${response.status} ${response.statusText}`);

    res.status(response.code).json(response.message);
  }

  catch (error) {
    console.log(error);
    res.status(500).json({ message: `Invalid Endpoint` });
  }
};