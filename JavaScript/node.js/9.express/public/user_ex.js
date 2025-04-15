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
            body: JSON.stringify({name}),
        });
        username.value = '';
        updateTable();
    });
    function createButton (text,clickHandler) {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    }

    function updateTable() {
        userTable.innerHTML = null;
        fetch('/users').then(res => res.json())
        .then(users=> {
            for(const key in users) {
                const row = userTable.createElement('div');
                row.innerHTML =  `<strong>ID :</strong> ${key}
                <strong>NAME : ${users[key]}</strong>`;
                userTable.appendChild(row);
            }
        });
    };

});