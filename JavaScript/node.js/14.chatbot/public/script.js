// 미션 1-1. 저 영역을 클릭해서 창이 나오게 한다.
// 미션 1-2. x 박스를 눌러서 다시 창이 닫히게 한다.

// 미션 3. send 버튼을 통해서 백엔드로 사용자가 입력한 대화 내용을 전송한다.
// 미션 4. 받아온 응답(에코메세지)를 대화창에 출력한다.

document.addEventListener('DOMContentLoaded',() => {
    const chatbot = document.getElementById('chatbot');
    const chatbotIcon = document.getElementById('chatbotIcon');
    const xbutton = document.getElementById('closeChatbot');
    const windowmodal = document.getElementById('chatbotWindow');
    const sendButton = document.getElementById('sendMessage');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotMessage = document.getElementById('chatbotMessage');
    chatbotIcon.addEventListener('click', (e) => {
        chatbotIcon.style.display = 'none';
        windowmodal.style.display = "flex";
    });
    xbutton.addEventListener('click', (e) => {
        chatbotIcon.style.display = 'flex';
        windowmodal.style.display = "none";
    });
    
    
    function echo(data) {
        chatbotMessage.createElement('div');
    }
    sendButton.addEventListener('click', (e) => {
        const question = chatbotInput.value;
        fetch('/api/chat', {
            method :  "POST",
            headers : "Content-Type: application/json",
            body: JSON.stringify({ "question": question})
        }).then(res => { //응답을 기다린다
            if(!res.ok) throw new Error('수정 실패');
            return res.text()
        }).then(res => res.json())
        .then(res => console.log(res));
        echo(question);
        chatbotInput.value= null;
    });
});

