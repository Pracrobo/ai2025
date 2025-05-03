document.getElementById('sendButton').addEventListener('click', async function handleSendButtonClick() {
    const questionInput = document.getElementById('questionInput');
    const question = questionInput.value.trim();
    
    if (question === '') return; // 입력값이 비어 있으면 종료

    appendMessage('User', question); // 사용자 메시지 추가

    try {
        const response = await fetch('/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question }),  // 질문을 서버로 보냄
        });

        if (!response.ok) {
            throw new Error('Network response was not ok'); // 네트워크 응답 확인
        }

        const data = await response.json();
        appendMessage('AI 챗봇', data.answer); // AI의 응답 추가
    } catch (error) {
        console.error('Error fetching response:', error);
        appendMessage('AI 챗봇', 'Error retrieving AI response. Please try again.');
    }

    questionInput.value = ''; // 입력란 초기화
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.scrollTop = chatContainer.scrollHeight; // 자동 스크롤
});

function appendMessage(sender, message) {
    const chatContainer = document.getElementById('chatContainer');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatContainer.appendChild(messageElement);
}