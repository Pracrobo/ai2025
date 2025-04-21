// 미션 1-1. 저 영역을 클릭해서 창이 나오게 한다.
// 미션 1-2. x 박스를 눌러서 다시 창이 닫히게 한다.

// 미션 3. send 버튼을 통해서 백엔드로 사용자가 입력한 대화 내용을 전송한다.
// 미션 4. 받아온 응답(에코메세지)를 대화창에 출력한다.
// promise chainnig(then~then)
// fetch의 ~~ promise (비동기)
// pending, fullfil, reject
// vs await 방식 
const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');
const sendMessage = document.getElementById('sendMessage');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessage');

const API_SERVER = 'http://127.0.0.1:5000'

chatbotIcon.addEventListener('click', () => {
    chatbotIcon.style.display = 'none';
    chatbotWindow.style.display = 'flex';
});

closeChatbot.addEventListener('click', () => {
    chatbotIcon.style.display = 'flex';
    chatbotWindow.style.display = 'none';
});

function addMessage(message, sender='user') {
    // 화면에 내 메세지 추가한다.
    const myMessage = document.createElement('div');
    myMessage.innerHTML = sender + ": " + message;
    chatbotMessages.appendChild(myMessage);

    // 스크롤 내린다.
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// 그래서.... 이 아래 함수를 잘게 나누기.... TODO
async function getInputFromYourSendMessage() {
    const question = chatbotInput.value;
    
    // 메세지 지우기
    chatbotInput.value = '';
    addMessage(question, 'user');

    // 서버로 보낸다
    const resp = await fetch(`${API_SERVER}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
    });

    const result = await resp.json();    

    addMessage(result.question, 'chatbot');
}

sendMessage.addEventListener('click', () => {
    getInputFromYourSendMessage();
});

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // console.log('엔터키눌렸으니, 서버로 보내는 코드 짜기 TODO');
        getInputFromYourSendMessage();
    }
});

