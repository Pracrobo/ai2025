# JavaScript Fetch가 적용 가능한 코드 예제
## 1. JSON 데이터 가져오기:

일반적인 사용 사례는 API에서 JSON 데이터를 검색하는 것입니다. 이 데이터는 웹 페이지 요소를 채우거나 동적 콘텐츠를 생성하거나 대화형 기능을 지원하는 데 사용될 수 있습니다.

```JavaScript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // 가져온 데이터 사용
    // 예: 데이터로 HTML 요소 업데이트
    document.getElementById('data-container').innerHTML = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('데이터 가져오기 오류:', error);
  });
```


## 2. 폼 제출:

JavaScript Fetch를 사용하여 POST 또는 PUT과 같은 메서드를 통해 서버에 폼 데이터를 제출할 수 있어 전통적인 폼 제출 방식에 비해 더 동적이고 사용자 친화적인 경험을 제공합니다.

```JavaScript
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // 기본 폼 제출 방지

  const formData = new FormData(form); // 폼 데이터 가져오기

  fetch('/submit-data', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('폼 제출 성공:', data);
    // 성공적인 폼 제출 처리 (예: 확인 메시지 표시)
  })
  .catch(error => {
    console.error('폼 제출 오류:', error);
    // 폼 제출 오류 처리 (예: 오류 메시지 표시)
  });
});

```


## 3. 사용자 인터페이스 업데이트:

JavaScript Fetch를 사용하여 사용자 상호 작용이나 서버 응답에 따라 웹 페이지의 요소를 동적으로 업데이트할 수 있습니다. 이렇게 하면 더 반응적이고 매력적인 사용자 경험을 제공합니다.



```JavaScript
document.getElementById('updateButton').addEventListener('click', () => {
  fetch('/update-data')
  .then(response => response.text())
  .then(data => {
    document.getElementById('content').innerHTML = data;
  })
  .catch(error => {
    console.error('콘텐츠 업데이트 오류:', error);
  });
});

```