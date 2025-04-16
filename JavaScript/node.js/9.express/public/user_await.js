document.addEventListener('DOMContentLoaded', () => {
    const form  = document.getElementById('form');
    const username  = document.getElementById('username');
    const userTable  = document.getElementById('userTable');

    // 최초 페이지가 호출될 때 백엔드에 데이터를 요청
    updateTable();

    form.addEventListener('submit', async(e) => {
        console.log('버튼 클릭됨'); 
        e.preventDefault(); 
        const name = username.value;
        const res = await fetch('/users', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, //객체, 배열 / 문자열 text/html or text/plain
            body: JSON.stringify({name})
        });
        username.value = '';
        updateTable();
    });

    function createButton (text, clickHandler) {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    }

    async function updateTable() { //await쓰면 함수명에 async 써주기
        userTable.innerHTML = '';
        const res = await fetch('/users'); //await 를 부르면 끝날때까지 기다림
        const users = await res.json(); //비동기 -> 동기로 바꿈
        for(const key in users) {
            const row = document.createElement('div');
            row.innerHTML =  `<strong>ID :</strong> ${key}
            <strong>NAME :</strong> ${users[key]}`;
            row.appendChild(createButton('수정', () => editUser(key)));
            row.appendChild(createButton('삭제', () => deleteUser(key)));
            userTable.appendChild(row);
        }
    }

    async function editUser(userId) {
        const newName = prompt('수정할 이름을 입력하세요');
        try{
            const res = await fetch(`/users/${userId}`, {
                method: 'PUT' ,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name : newName})
            //  인터페이스 변경 body: JSON.stringify({name : newName})  
            });
            if(!res.ok) throw new Error('수정 실패');
            alert('수정 성공');
            updateTable();
        }catch(err){
            alert('수정 중 오류 발생');
        }
    }

    async function deleteUser(userId) {
        const confirmDelete = confirm('정말 삭제하시겠습니까?');
        if(confirmDelete) {
            try{
                const res = await fetch(`/users/${userId}`, {
                    method: 'DELETE'
                });
                if(!res.ok) throw new Error('삭제 실패');
                updateTable();
                alert('삭제 성공');
            }catch(error) {
                console.error('삭제중 오류 발생: ', error);
                alert('삭제중 오류 발생');
            };
        } else{
            alert('그냥 둡니다.');
        }
    }
});