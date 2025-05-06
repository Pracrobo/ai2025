document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendButton");
  const sendButtonStream = document.getElementById("sendButtonStream");
  const questionInput = document.getElementById("questionInput");

  sendButton.addEventListener("click", function () {
    const question = questionInput.value;

    // Simple validation check
    if (question.trim() === "") {
      alert("질문을 입력하세요.");
      return;
    }

    // Send the question to the backend
    fetch("/api/sendQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: question }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response returned from the backend here
        displayResponse(data.answer);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  sendButtonStream.addEventListener("click", function () {
    const question = questionInput.value;

    // Simple validation check
    if (question.trim() === "") {
      alert("질문을 입력하세요.");
      return;
    }

    // Send the question to the backend
    // SSE 방식으로 요청....
    const eventSource = new EventSource(
      `/api/sendQuestionStream?question=${encodeURIComponent(question)}`
    );

    // 응답이 오면??
    eventSource.onmessage = (event) => {
      if (event.data == "[DONE]") {
        // 모든 스트링 종료시
        console.log("끝");
        eventSource.close();
        return;
      }

      const response = JSON.parse(event.data.replace("data: ", "").trim()); // 서버가 보내온 메세지에서 'data: ' 을 지우려고...
      if (response.content) {
        displayResponseStream(response.content);
      }
    };
  });

  function displayResponse(response) {
    const chatContainer = document.getElementById("chatContainer");
    const responseElement = document.createElement("p");
    responseElement.textContent = response;
    chatContainer.appendChild(responseElement);
    console.log(chatContainer);
    console.log(response);
  }

  function displayResponseStream(response) {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.textContent += response;
    chatContainer.scrollTop = chatContainer.scrollHeight; // 화면 자동으로 내리기
  }
});
