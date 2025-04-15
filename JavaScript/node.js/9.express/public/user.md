document.addEventListener('DOMContentLoaded', () => {
    const form  = document.getElementById('form');
    const username  = document.getElementById('username');
    const userTable  = document.getElementById('userTable');

    form.addEventListener('submit', (e) => {
        console.log('버튼 클릭됨'); //기본값의 GET 페이지 자체를 다시 불러온다.
        e.preventDefault(); // 기본동작인 걸 멈춰~~~~~~
        const name = username.value;
        console.log('생성할 이름 : ', name);
        //path로 부른다 (함수) 
        // api 로 FE-BE를 연결
        //fetch
        fetch('/users', {
        //http:~ 생략하면 현재 서버
        //key-value 타입
        // 객체타입으로 보낼 수 없다, 자료구조(JSON으로 보낼수없음)
        // 문자로 변경 , 아스키 코드, 01010로 감(헥사값)
            method: 'POST', // 대소문자 상관없음
            headers: {'Content-Type': 'application/json'},
            //body: { 'name' : name },
            body: JSON.stringify({name}),
        });
        // 미션 1. 입력이 끝났으면, 입력값 클리어하기
        username.value = null;
        updateTable();
    });
    
    // 미션2. 입력이 끝났으면, 서버에 정보를 요청해서 화면에 표시하기
    function updateTable() {
        userTable.innerHTML = null;
        fetch('/users').then(res => res.json())
        .then(users=> {
            for(const key in users) {
                const row = document.createElement('div');
                row.innerHTML =  `<strong>ID :</strong> ${key}
                <strong>NAME : ${users[key]}</strong>`;
                userTable.appendChild(row);
            }
        });
    };

});