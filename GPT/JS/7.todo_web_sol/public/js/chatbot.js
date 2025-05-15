function createChatbotUI() {
    const createChat= `
     <div id="chatbot">
        <div class="chatbot-icon" id="chatbotIcon"><!--아이콘-->
            <i class="bi bi-chat-left-text"></i>
        </div>
        <div class="chatbot-window" id="chatbotWindow"><!-- 창-->
            <div class="chatbot-header">
                <span>Chatbot</span>
                <button id="closeChatbot">X</button>
            </div>
            <div class="chatbot-body">
                <div class="chatbot-messages" id="chatbotMessage">
                </div>
                <div class="chatbot-input-container">
                    <input type="text" id="chatbotInput" placeholder="Type a message">
                    <button id="sendMessage">Send</button>
                </div>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', createChat);

}
document.addEventListener('DOMContentLoaded', () => {
    createChatbotUI()
    const chatbotIcon = document.getElementById('chatbotIcon');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbot = document.getElementById('closeChatbot');
    const sendMessage = document.getElementById('sendMessage');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotMessages = document.getElementById('chatbotMessage');

    const API_SERVER = 'http://localhost:3000'

    chatbotIcon.addEventListener('click', () => {
        chatbotIcon.style.display = 'none';
        chatbotWindow.style.display = 'flex';
    });

    closeChatbot.addEventListener('click', () => {
        chatbotIcon.style.display = 'flex';
        chatbotWindow.style.display = 'none';
    });


    sendMessage.addEventListener('click', async () => {
        await getInputFromYourSendMessage();
    });

    chatbotInput.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            // console.log('엔터키눌렸으니, 서버로 보내는 코드 짜기 TODO');
            await getInputFromYourSendMessage();
        }
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

        addMessage(result.answer, 'chatbot');
    }

});