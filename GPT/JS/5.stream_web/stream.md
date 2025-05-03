SSE 방식으로 요청, stream 방식의 server.js 부분

```JS

app.get('/api/sendQuestonStream', async (req, res) => {

});

```


```Js
const eventSource = new EventSource(`/api/sendQuestionStream?quest=${encodeURIComponent(questopm)}`)

// 응답이 오면 
eventSource.onmessage = (event) => {
    if(event.data ='[DONE]' ) {
        console.log("끝")
        eventSource.close();
    }

    const response = JSON.parse(event.data.replace('data: '. '').trim());
    if(response.content) {
        displayResponse(response.content);
    }
}



function displayResponse(response) {

}
```


서버 클라이언트간에 스트리밍 메세지를 주고받기 위한 다양한 방법이 있다.
1. web socket
2. SSE(server sent event)  : GET 요청, text/event-stream 방식으로 온다.
   - 표준은 data: 메세지' \n\n 형태로 오고
   - [DONE] \n\n 을 보내는게 기본적인 구성( 단, 꼭 지켜야 하는건 아니다)

