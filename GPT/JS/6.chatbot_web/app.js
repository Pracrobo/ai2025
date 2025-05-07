const express = require('express');
const path = require('path');
const axios = require('axios');
const Database = require('better-sqlite3');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
//const db = new Database('chatbot.db', { verbose: console.log });
const db = new Database(':memory:'); // 파일에 저장하지 않고 메모리에 임시 저장하는 DB



// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const conversationHistory = [];



// db.prepare(`
//     CREATE TABLE IF NOT EXISTS messages (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       role TEXT NOT NULL,
//       message TEXT NOT NULL,
//       createDate DATE 
//     )
//   `).run();


  
db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      role TEXT NOT NULL,
      message TEXT NOT NULL
    )`);

// 기본 경로에 대한 처리
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/chat', async (req, res) => {
    const { userInput } = req.body;
    
    dbCreateMessages('user', userInput);
    console.log('userInput:', userInput);
    
    //이전 대화 내용에 추가
    //conversationHistory.push({role:'user', content: userInput});
    try {
        const previousConversation = getRecentConversation();
        const response = await getChatGPTResponse(previousConversation);
        console.log(response);
        console.log('-----');
        console.log('보낼전체대화내용:', previousConversation);
        console.log('-----');
        conversationHistory.push({role: 'assistant' , content: response})
        dbCreateMessages('assistant', response);
        res.json({ message: response });

    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        res.status(500).json({ message: 'Error communicating with OpenAI' });
    }
});

function getRecentConversation() {
    const stmt = db.prepare('SELECT * FROM messages ORDER BY id DESC LIMIT 10');
    const rows = stmt.all();
    console.log('db:', rows);
    return rows.reverse();
}

function datecal() {
    let today = new Date();
    let hours = today.getHours();
}


function dbCreateMessages(role, message) {
    try {
        const stmt = db.prepare('INSERT INTO messages (role, message) VALUES (?, ?)');
        stmt.run(role, message);
        console.log("DB 저장 성공")        
    }catch(error) {
        console.error('Error DB:', error);
    }
}

async function getChatGPTResponse(previousConversation) {
    const apiKey = process.env.OPENAI_API_KEY;
    const CHATGPT_URL = 'https://api.openai.com/v1/chat/completions';
    try {
        const response = await axios.post(CHATGPT_URL, {
            //url, body, header
            model: "gpt-4o",
            messages: [{ role: "system", content: 'You are a helpful assistant. Please remember our conversion history in memory and respond according' }, 
             // 여러 사용자가 한다면 겹치는 것, session별로 또는 창별로 새로 짜야한다. 프롬프트 엔지니어링은 뒤에 Please ~ 처럼 예시로 쓴다.
                //  { role: "user", content: userInput }
             // ...conversationHistory 
                ...previousConversation  
            ],
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
        });

        const answer = response.data.choices[0].message.content;
        return answer;

    } catch (error) {
        throw new Error('Failed to fetch response from OpenAI');
    }
}

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});