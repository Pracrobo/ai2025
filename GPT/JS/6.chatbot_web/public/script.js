// script.js
document.addEventListener('DOMContentLoaded', function() {
    const userInputForm = document.getElementById('user-input-form');
    const userInput = document.getElementById('user-input');
    const chatContainer = document.getElementById('chat-container');

    // Form submit event
    userInputForm.addEventListener('submit', async function(event) {
        event.preventDefault();  // 기본 폼 제출 동작 방지

        const message = userInput.value.trim();

        // 빈 메시지를 입력할 수 없게 한다
        if (message === '') return;

        // 사용자 메시지를 채팅에 추가
        appendMessage('user', message);
        showLoadingIndicator();
        try {
            // 서버로 메시지 전송
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInput: message }) // 수정: 'userInput' 키 사용
            });

            if (!response.ok) throw new Error('Network response was not ok');
            hideLoadingIndicator();
            // 응답 데이터 처리
            const data = await response.json();
            appendMessage('chatbot', data.message); // 수정: 'message' 키 사용

        } catch (error) {
            console.error('Error fetching response:', error);
            appendMessage('AI chatbot', 'Error retrieving AI response. Please try again.');
        }

        // 입력 필드 초기화 및 스크롤 조정
        userInput.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
    });

    // 메시지 추가 함수
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${sender}`;
        messageElement.textContent = `${sender}: ${message}`;
        chatContainer.appendChild(messageElement);
        scrollToBottom();
    }

    let loadingMessageDiv = null; 

    function showLoadingIndicator() {
        loadingMessageDiv = document.createElement("div");
        loadingMessageDiv.className = 'chat-message chatbot';
        loadingMessageDiv.innerHTML = `
            <div class="message-content">
                <span class="loading-dots"></span>생각중...
            <div>
        `
        chatContainer.appendChild(loadingMessageDiv);
        scrollToBottom();
    }

    function hideLoadingIndicator() {
        if(loadingMessageDiv) {
            loadingMessageDiv.remove();
            loadingMessageDiv = null;
        }
    }

    function scrollToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});