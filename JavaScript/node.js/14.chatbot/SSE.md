# SSE : Server Sent Event
## 웹소켓(statefull 상태, 무거움)

- 서버에서 클라이언트(브라우저)로 실시간 데이터 푸시를 할 수 있는 HTTP 기반의 단방향 통신 방식

# HTTP 방식 지금은 stateless 상태
# 📡 SSE (Server-Sent Events) 정리

## 🎯 핵심 요약

| 항목        | 설명 |
|-------------|------|
| 프로토콜    | HTTP (long-lived connection) |
| 통신 방향   | 서버 ➡ 클라이언트 (단방향) |
| 사용 시점   | 실시간 알림, 뉴스 피드, 주식 시세 등 |
| 브라우저 지원 | ✅ 대부분 지원 (IE 제외) |

---

## 🔁 WebSocket과 비교

| 항목            | SSE                         | WebSocket                      |
|-----------------|-----------------------------|--------------------------------|
| 통신 방향       | 단방향 (서버 ➡ 클라이언트)  | 양방향 (서버 ↔ 클라이언트)     |
| 프로토콜        | HTTP                        | TCP (업그레이드: ws/wss)      |
| 브라우저 지원   | 거의 다 됨 (IE 제외)         | 일부 환경 설정 필요            |
| 사용 난이도     | 간단함                      | 좀 더 복잡                     |
| 자동 재연결     | ✅ 내장됨                   | ❌ 직접 구현 필요              |

---

## 🧪 간단한 예제

### 📡 서버 (Node.js + Express)
```JavaScript
const express = require('express');
const app = express();

app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let count = 0;
    const interval = setInterval(() => {
        res.write(`data: ${++count}\n\n`);
    }, 1000);

    req.on('close', () => {
        clearInterval(interval);
    });
});

app.listen(3000, () => console.log('SSE server running'));
```

### 클라이언트 
```JavaScript
<script>
    const evtSource = new EventSource('http://localhost:3000/sse');

    evtSource.onmessage = function(event) {
        console.log("서버에서 받은 메시지:", event.data);
    };

    evtSource.onerror = function(err) {
        console.error("SSE 에러:", err);
    };
</script>
```

🔥 장점
- HTTP 기반이라 방화벽/프록시 우회 쉬움
- 자동 재접속 지원
- 구현 간단
- 헤더나 인증과의 연동 쉬움

🧊 단점
-단방향 (서버 ➡ 클라이언트만 가능)
- 브라우저가 탭을 너무 많이 열면 리소스 부담
- 인터넷 끊겼을 때 복구 신경 써야 함 (자동 재연결 기능은 있음)

✨ 요약 문장
- SSE는 서버가 실시간으로 클라이언트에 메시지를 보내야 할 때, 간단하게 구현 가능한 HTTP 기반 스트리밍 기술입니다.