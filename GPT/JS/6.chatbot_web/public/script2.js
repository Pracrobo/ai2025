// script.js
document.addEventListener('DOMContentLoaded', async function() {
    const userInputForm = document.getElementById('user-input-form');
    const userInput = document.getElementById('user-input');
    const chatContainer = document.getElementById('chat-container');
    const sessionListContrainer = document.getElementById('session-list-container');
    const currentSessionId = document.getElementById('current-session-id');
    // Form submit event
    userInputForm.addEventListener('submit', function(event) {
        event.preventDefault();  // 기본 폼 제출 동작 방지
        submitUserInput();
    });

    async function submitUserInput() {
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
    }

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

    function appendSession(session) {
        const sessionDiv = document.createElement('div');
        sessionDiv.className = 'session-item';
        sessionDiv.innerHTML = `
            <a href="#" class="session-link" data-session-id="${session.id}">
            <div class="session-id"> ${session.id}</div>
            <div class="session-start-time">${session.start_time}</div>
            </a>
        `
        sessionListContrainer.appendChild(sessionDiv);
        addSessionClickListener();
    }
    
    function addSessionClickListener() {
        const sessionLinks = document.querySelectorAll(".session-link");
        sessionLinks.forEach(link => {
            link.addEventListener('click', async (e) => {
                e.preventDefault();
                const sessionId = link.dataset.sessionId;
                if(sessionId === currentSessionId.textContent) return;
                await showSession(sessionId);
            })
        })
    }
    
    async function showSession(sessionId) {
        const response = await fetch(`/api/session/${sessionId}`);
        const data = await response.json();
        chatContainer.innerHTML='';
        console.log(data);

        currentSessionId.textContent = data.id;

    }

    async function loadAllSessions() {
        const response = await fetch('/api/all-sessions');
        const data = await response.json();
        sessionListContrainer.innerHTML ="";
        data.allSessions.forEach(appendSession);
    }
    //새 세션 만들기
    const newChatButton = document.getElementById("new-chat-button");
    newChatButton.addEventListener('click', async function() {
        const response = await fetch('/api/new-session', {method:'POST'});
        const data = await response.json();
        if(data.success) {
            //화면 갱신
            loadAllSessions();
        }
    })
    function displaySessionInfo(sessionData) {
        currentSessionId.textContent = sessionData.id;
    }

    async function loadChatHistoryAndSession() {
        const response = await fetch('/api/current-session');
        const data = await response.json();
        console.log(data);
        //   data.conversationHistory.forEach(appendMessage);
        displaySessionInfo(data); //현재 세션 정보 표시하기
    }

    //시작할때 세션 목록 호출
    await loadAllSessions();

    //시작할때 현재 세션 대화내용 호출
    await loadChatHistoryAndSession();

});

