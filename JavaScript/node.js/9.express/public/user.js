document.addEventListener('DOMContentLoaded', () => {
    const form  = document.getElementById('form');
    const username  = document.getElementById('username');
    const userTable  = document.getElementById('userTable');

    form.addEventListener('submit', (e) => {
        console.log('버튼 클릭됨'); 
        e.preventDefault(); 
        const name = username.value;
        console.log('생성할 이름 : ', name);
        fetch('/users', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            //body: { 'name' : name },
            body: JSON.stringify({name})
        }).then(response => {
            const contents = response.json();
            console.log(contents);
            userTable.innerHTML=`<table><th>사용자 이름<th><td>${contents}</td></table>`
        }).catch((error) => {
            userTable.innerHTML=`${contents} 로딩 실패`;
        })
        
        
    });
    // 미션 1. 입력이 끝났으면, 입력값 클리어하기

    // 미션2. 입력이 끝났으면, 서버에 정보를 요청해서 화면에 표시하기
});