const {OpenAI} = require('openai');
require('dotenv').config({ path: '../.env' });
const apiKey = process.env.OPENAI_API_KEY;

if(!apiKey) {
    console.error('API 키가 올바르게 설정되어 있지 않습니다.');
    process.exit(1); // 프로그램 종료
}

const openai = new OpenAI({
    apiKey : process.env.OPENAI_API_KEY
});

async function getGPTReponse(userInput) {
    try{
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages : [
                {role : 'system', content: 'You are a 10year learning skills software developer'},
                {role : 'user', content : userInput},
            ],
            temperature: 0.1,      
        });
        return response.choices[0].message.content;
    }catch(err) {
        if(err.status) {
            const status = err.status;
            if(status === 429) {
                console.error('Error: 요청 한도 초과 (크레딧 부족)');
            }else if(status === 401) {
                console.error('Error : 해당 키에 권한이 없습니다.');
            }else if(status === 403) {
                console.error('Error: 해당 모델을 이용할 권한이 없습니다. ');
            }else {
                console.error("알 수 없는 에러입니다. ");
            }
        }
    }
}

async function chatWithUser() {
    const userInput = "안녕 chatbot, 네가 기여하기 쉬운 오픈소스 프로젝트는?";
    const chatGPTResponse = await getGPTReponse(userInput);
    console.log("챗봇 응답 :" , chatGPTResponse);
}


chatWithUser();