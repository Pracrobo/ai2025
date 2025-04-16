// 미션 1-1. 저 영역을 클릭해서 창이 나오게 한다.
// 미션 1-2. x 박스를 눌러서 다시 창이 닫히게 한다.

// 미션 3. send 버튼을 통해서 백엔드로 사용자가 입력한 대화 내용을 전송한다.
// 미션 4. 받아온 응답(에코메세지)를 대화창에 출력한다.
// promise chainnig(then~then)
// fetch의 ~~ promise (비동기)
// pending, fullfil, reject
// vs await 방식 
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

    sendButton.addEventListener('click', async(e) => {
        const question = chatbotInput.value;
        const myMessage = document.createElement('div');
        myMessage.innerHTML = "me: " + question;
        chatbotMessage.appendChild(myMessage);
        
        const res = await fetch('/api/chat', {
            method :  "POST",
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify({ "question": question})
        });
        const result = await res.json();
        console.log(result);
        const answer = document.createElement('div');
        answer.innerHTML = result.question;
        chatbotMessage.appendChild(answer);
        chatbotInput.value = '';
    });


    chatbotInput.addEventListener('keypress',(e) => {
        if(e.key === "enter") {
            console.log("엔터키 눌렀을니깐 서버로 보내는 코드 짜기")
        }
    })
});

