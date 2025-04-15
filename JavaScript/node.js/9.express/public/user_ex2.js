document.addEventListener('DOMContentLoaded', () => {
    const form  = document.getElementById('form');
    const username  = document.getElementById('username');
    const userTable  = document.getElementById('userTable');

    form.addEventListener('submit', (e) => {
        console.log('버튼 클릭됨'); 
        e.preventDefault(); 
        const name = username.value;
        fetch('/users', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
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

    function updateTable() {
        userTable.innerHTML = '';
        fetch('/users')
        .then(res =>  res.json())
        .then(users => {
            for(const key in users) {
                const row = document.createElement('div');
                row.innerHTML =  `<strong>ID :</strong> ${key}
                <strong>NAME :</strong> ${users[key]}`;
                row.appendChild(createButton('수정', () => editUser(key)));
                row.appendChild(createButton('삭제', () => deleteUser(key)));
                userTable.appendChild(row);
            }
        });
    }

    function editUser(userId) {
        const newName = prompt('수정할 이름을 입력하세요');
        fetch(`/users/${userId}`, {
            method: 'PUT' ,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({newName})
          //  인터페이스 변경 body: JSON.stringify({name : newName})  
        }).then(res => {
            if(!res.ok) throw new Error('수정 실패');
                alert('수정 성공');
                updateTable();
        })
        .catch(error => {
            alert('수정 중 오류 발생');
        });
    }

    function deleteUser(userId) {
        const confirmDelete = confirm('정말 삭제하시겠습니까?');
        if(confirmDelete) {
            fetch(`/users/${userId}`, {
                method: 'DELETE'
            }).then(res => {
                if(!res.ok) throw new Error('삭제 실패');
                    updateTable();
                    alert('삭제 성공');
            }).catch(error => {
                console.error('삭제중 오류 발생: ', error);
                alert('삭제중 오류 발생');
            });
        }else{
            alert('그냥 둡니다.');
        }
    }
});