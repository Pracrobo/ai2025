const { OpenAI } = require("openai");
require("dotenv").config({ path: "../../.env" });
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("API 키가 올바르게 설정되어 있지 않습니다.");
  process.exit(1); // 프로그램 종료
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//const url = "https://api.openai.com/v1/chat/completions";

async function getGPTReponse(userInput) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "you are a highly skilled pinaist" },
      { role: "user", content: userInput }, //이전내용을 기억하지 못함, 그때 그때 마다 새로운
    ],
    top_p: 0.9, // 확율 기반 토큰 선택 범위
    frequency_penalty: 0.5, // 반복 억제
    presence_penalty: 0.6, // 얼마나 새로운 주제를 가져올거냐... 등등..
    max_tokens: 1000,
    temperature: 0.7,
    // temperature: 창의성(정확도) 1.0이 제일 보통, 2.0 까지 있음
    // 0.1 ~ 0.3 : 기술질의,
    // 0.6 ~ 0.9 : 사람같은 응답
    stream: true,
  });

  for await (const chunck of response) {
    const content = chunck.choices[0].delta.content || "";
    console.log(content);
  }
}
async function chatWithUser() {
  const userInput = "안녕 chatbot, 네 스케줄은 뭐야?";
  const chatGPTResponse = await getGPTReponse(userInput);
  console.log("챗봇 응답 :", chatGPTResponse);
}

chatWithUser();
