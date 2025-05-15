const express = require('express');
const router = express.Router();

const { OpenAI } = require('openai')

require('dotenv').config()

const openai = new OpenAI();

router.post('/api/chat', async(req,res) => {
    const {question} = req.body;
    const reply = await requestChatGPT(question)
    let answer;
    const {action, text} = reply;
    switch(action) {
        case 'add':
            answer = '추가했음'
            break;
        case 'done':
            answer = '완료처리했음'
            break;
        case 'delete':
            answer = '삭제했음'
            break;
    }
    return res.send({answer : `${reply}`})
});


async function requestChatGPT(userInput) {
    const response = await openai.chat.completions.create({
        model : 'gpt-4o-mini',
        messages: [
            {role: 'system', content: "너는 투두리스트에 대응하는 챗봇입니다."},
            {role: 'user', content: userInput},
        ],
        temperature: 0.2
    })
    console.log(response)
    return response.content
}

module.exports = router;