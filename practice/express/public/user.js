document.addEventListener('DOMContentLoaded', () => {
    const form  = document.getElementById('form');
    const username  = document.getElementById('username');
    const nickname  = document.getElementById('nickname');
    const age  = document.getElementById('age');
    const userTable  = document.getElementById('userTable');
    
    function updateUser() {
        userTable.innerHTML = '';
        fetch('/users')
        .then(res =>  res.json())
        .then(users => {
            for(const key in users) {
                const row = document.createElement('div');
                row.innerHTML =  `<strong>ID :</strong> ${key}
                <strong>NAME :</strong> ${users[key].name}
                <strong>닉네임 :</strong> ${users[key].nickName}
                <strong>나이 :</strong> ${users[key].age}`;
                row.appendChild(createButton('수정', () => editUser(key)));
                row.appendChild(createButton('삭제', () => deleteUser(key)));
                userTable.appendChild(row);
            }
        });
    }

    function deleteUser(userId) {
        const confirmDelete = confirm('정말 삭제하시겠습니까?');
        if(confirmDelete) {
            fetch(`/users/${userId}`, {
                method: 'DELETE'
            }).then(res => {
                if(!res.ok) throw new Error('삭제 실패');
                    updateUser();
                    alert('삭제 성공');
            }).catch(error => {
                console.error('삭제중 오류 발생: ', error);
                alert('삭제중 오류 발생');
            });
        }else{
            alert('그냥 둡니다.');
        }
    }
    
    function createButton (text, clickHandler) {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const name = username.value;
        const userage = age.value;
        const nickName = nickname.value;
        console.log('생성 이름 :' , name);
        console.log('생성 나이 :' , userage);
        console.log('생성 닉넴 :' , nickName);


        fetch('/users', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name, 
                nickName : nickName,
                age: userage
            })
        }).then(response  => {
            if(!response.ok) throw new Error('등록 실패');
            return response.text();
        }).then(data => {
            alert('등록됨');
            updateUser();
        }).catch(error => {
            alert('등록 실패:' + error.message);
        });
        username.value = null;
        nickname.value = null;
        age.value = null;
    });
});