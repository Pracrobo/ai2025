
[RFC959, FTP]('https://datatracker.ietf.org/doc/html/rfc959')

[RFC793, TCP]('https://www.ietf.org/rfc/rfc793.txt')


- MIME (https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/MIME_types/Common_types)

## Server.listen()
### Syntax
- server.listen(port, hostname, backlog, callback);
### Parameter Values

| Parameter | Description |
|-----------|-------------|
| `port` | Optional. Specifies the port we want to listen to. |
| `hostname` | Optional. Specifies the IP address we want to listen to. |
| `backlog` | Optional. Specifies the max length of the queue of pending connections. Default is `511`. TCP 서버가 새 클라이언트 연결을 받아들일 때 사용하는 대기 큐의 최대 길이를 말해요. 이 큐는  아직 accept()로 처리되지 않은 연결 요청들이 잠시 쌓이는 공간/ 연결 요청(Connection request)이 큐에 들어감 /메시지 개수나 실제 데이터 전송과는 무관 |
| `callback` | Optional. Specifies a function to be executed when the listener has been added. |



- If port is omitted or is 0, the operating system will assign an arbitrary unused port, which can be retrieved by using server.address().port after the 'listening' event has been emitted.

- If host is omitted, the server will accept connections on the unspecified IPv6 address (::) when IPv6 is available, or the unspecified IPv4 address (0.0.0.0) otherwise.

- In most operating systems, listening to the unspecified IPv6 address (::) may cause the net.Server to also listen on the unspecified IPv4 address (0.0.0.0).