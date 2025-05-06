const axios = require('axios');
require('dotenv').config({ path: '../.env' });

const openaiApiKey = process.env.OPENAI_API_KEY;

const url = 'https://api.openai.com/v1/chat/completions';

async function getChatGPTResponse() {
    try {
        const response = await axios.post(url, {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "you are a software engineer" },
                { role: "user", content: "github top10중에 하나만 pr날릴거 알려줘" } //이전내용을 기억하지 못함, 그때 그때 마다 새로운
            ],
            temperature: 0.1, // 창의성(정확도)1.0이 제일  보통  0.1 ~ 0.3 : 기술질의 , 0.6~0.9 사람같은 응답
            top_p : 0.9, // 확률 기반 토큰 선택범위
            frequency_penalty: 0.2, //자주반복x
            presence_penalty : 0.6 , //얼마나 새로운 주제를 가져올거냐
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${openaiApiKey}`
            }
        });

        console.log(response.data.choices[0].message); // ← 여기서 바로 처리
    } catch (err) {
        console.error('에러 발생:', err.response?.data || err.message);
    }
}

getChatGPTResponse(); // 반환값을 굳이 안 받음
