// 미션 1-1. 저 영역을 클릭해서 창이 나오게 한다.
// 미션 1-2. x 박스를 눌러서 다시 창이 닫히게 한다.

// 미션 3. send 버튼을 통해서 백엔드로 사용자가 입력한 대화 내용을 전송한다.
// 미션 4. 받아온 응답(에코메세지)를 대화창에 출력한다.
// promise chainnig(then~then)
// fetch의 ~~ promise (비동기)
// pending, fullfil, reject
// vs await 방식 
document.addEventListener('DOMContentLoaded',() => {
    const chatbotIcon = document.getElementById('chatbotIcon');
    const xbutton = document.getElementById('closeChatbot');
    const windowmodal = document.getElementById('chatbotWindow');
    const sendButton = document.getElementById('sendMessage');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotMessage = document.getElementById('chatbotMessage');
    

    const API_SERVER = 'http://127.0.0.1:5000'

    chatbotIcon.addEventListener('click', (e) => {
        chatbotIcon.style.display = 'none';
        windowmodal.style.display = "flex";
    });
    xbutton.addEventListener('click', (e) => {
        chatbotIcon.style.display = 'flex';
        windowmodal.style.display = "none";
    });


    function addMessage(message, sender='user') {
        // 화면에 내 메세지 추가한다.
        const myMessage = document.createElement('div');
        myMessage.innerHTML = sender + ": " + message;
        chatbotMessages.appendChild(myMessage);
    
        // 스크롤 내린다.
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    async function sendMessage() {
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
        sendMessage();
    });

    sendButton.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress',(e) => {
        if(e.key === "Enter") {
            sendMessage() 
        }
    })
});

