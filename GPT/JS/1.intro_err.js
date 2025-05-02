const axios = require('axios');
require('dotenv').config({path: '../.env'}) //.env 파일 읽어서 메모리에 올리기

const openaiApiKey = process.env.OPENAI_API_KEY;
console.log(openaiApiKey);
//const url ="https://api.openai.com/v1/responses";///
const url="https://api.openai.com/v1/chat/completions";

async function getGPTResponse() {
    const response = await axios.post(url, {
        "model": "gpt-3.5-turbo",
        "message" : [
            // "role": 'system', 'content' : 'you are a cook'
            // "role": 'system', 'content' : 'you are a software engineer.'
            {"role": 'system', 'content' : 'you are a helpful assistant.'},
            {"role": 'user', 'content' : '나 배고파'}
            // "role": 'system', 'content' : 'you are a singer'
        ]}, {
        headers: {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${openaiApiKey}`
        }
    })
    console.log(response.data);
}
getGPTResponse();
// (async () => {
//     const ai_response = await getGPTResponse;
//     console.log(ai_response);

// })();

// myfunction();