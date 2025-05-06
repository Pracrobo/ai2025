document.getElementById('sendButton').addEventListener('click', async function() {
    console.log('들어옴');
    const question = document.getElementById('questionInput').value.trim();
    if (question === '') return;

    appendMessage('User', question);

    const response = await fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
    });

    const data = await response.json();
    appendMessage('AI 챗봇', data.answer);
    document.getElementById('questionInput').value = '';
    document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight;
});

function appendMessage(sender, message) {
    const chatContainer = document.getElementById('chatContainer');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatContainer.appendChild(messageElement);
}