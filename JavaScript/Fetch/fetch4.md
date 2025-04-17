# Fetch
fetch는 Promise를 반환하기 때문에, 이 Promise는 보통 세 가지 상태를 가지게 된다.

## pending(대기 중)
- fetch 요청을 보낸 직후의 상태야.
- 로딩 스피너를 띄우거나, 버튼 비활성화 처리 등 사용자에게 "작업 중"임을 알릴 때 사용.
- 응답을 기다리는 중이라 아직 성공(fulfilled)도 아니고 실패(rejected)도 아님.
- 네트워크 통신이 진행 중이야.
```JavaScript
const promise = fetch('https://example.com');
// 여기서 promise는 아직 pending 상태임
```

```ts
  builder.addCase(fetchData.pending, (state) => {
    state.loading = true;
    state.error = null;
  });
```

## fulfilled( 이행됨)
- 서버로부터 응답을 정상적으로 받아왔을 때의 상태야.
- 응답 자체가 성공적으로 왔다는 의미고, HTTP status code가 200~299인지와는 별개.
- 예를 들어 404 에러 페이지를 받아와도 fulfilled 상태가 될 수 있어
- 받아온 데이터를 상태에 저장.
- 로딩 상태 해제.

```JavaScript
fetch('https://example.com')
  .then(response => {
    // fulfilled 상태
    if (response.ok) {
      // status code가 200~299일 때
      return response.json();
    } else {
      // 응답은 왔지만 status code가 404, 500 등
      throw new Error('응답 오류');
    }
  });

```

```ts
builder.addCase(fetchData.fulfilled, (state, action) => {
  state.loading = false;
  state.data = action.payload;
});
```

## rejected (거부됨)
- 네트워크 에러나 CORS 에러, 잘못된 URL 등으로 인해 응답을 받을 수 없을 때 발생.
- 이 상태에서는 .catch()나 try...catch에서 에러를 잡을 수 있어.
```JavaScript
fetch('https://invalid-url.com')
  .then(response => {
    // 실행되지 않음
  })
  .catch(error => {
    // rejected 상태
    console.error('Fetch 실패:', error);
  });
```
```ts
builder.addCase(fetchData.rejected, (state, action) => {
  state.loading = false;
  state.error = action.error.message;
});

```


 4. fetch (보통 사용자가 정의한 이름)
의미: 데이터를 가져오기 위한 비동기 작업 이름 (예: fetchUsers, fetchPosts 등).

설명:
- createAsyncThunk를 사용해 정의한 thunk의 이름.
- 해당 이름에 따라 자동으로 pending, fulfilled, rejected 액션이 생성됨
```ts
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const res = await axios.get("/api/data");
  return res.data;
});

```

|상태 | 설명|

|pending | 요청 중, 아직 응답을 기다리는 상태|
|fulfilled | 응답을 성공적으로 받음 (성공 여부와 별개)|
|rejected | 요청 실패 (네트워크 문제, CORS, 등)|



# Redux 비동기 처리 상태 요약 (JavaScript 기준)

Redux Toolkit에서 `createAsyncThunk`를 사용하면 비동기 작업을 쉽게 관리할 수 있습니다.
비동기 작업을 만들면 아래 3가지 상태가 자동으로 생성됩니다:
