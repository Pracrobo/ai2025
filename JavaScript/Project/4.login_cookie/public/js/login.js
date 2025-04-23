document.addEventListener('DOMContentLoaded',() => {
     // 로그인 한적이 있을까? 물어보기...
    checkLoginStatus();
    document.getElementById('login').addEventListener('click', (e) => {
        e.preventDefault();
        login();
    })
});

async function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try{
        const response  = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            showProfile(data.username);
        }else{
            // 로그인 실패
         //   console.log('로그인 실패', response);
        }
    }catch (error){
        console.error('로그인 요청 중 에러 발생:', error);
    }
}
async function checkLoginStatus() {
    const response = await fetch('/api/check-login');
    if (response.status === 200) {
        const data = await response.json();
        // console.log(data);
        showProfile(data.username);
    } else {
        const data = await response.json();
        console.log(data);
        showLoginForm();
    }
}

function showProfile(name) {
    document.getElementById('profile').style.display = 'block';
    const namespan = document.getElementById('namespan');
    namespan.textContent = name;
    namespan.style.display = 'block';
}
